import { TextField, Box, Button, Typography, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import React, { FC, useState } from "react";
import "./App.css";

export type Item = {
    question: string;
    answer: string;
    id: number;
};

type AddCardProps = {
    setIsPracticingCards: (curState: boolean) => void;
    addedItems: Item[];
    setAddedItems: (items: Item[]) => void;
};

const AddCard = (props: AddCardProps) => {
    const [currentQuestion, setCurrentQuestion] = useState<string>("");
    const [currentAnswer, setCurrentAnswer] = useState<string>("");

    const onHandleDelete = (id: number) => {
        props.setAddedItems(props.addedItems.filter((item) => item.id != id));
    };
    const Items = props.addedItems.map((item) => {
        return (
            <Box
                key={item.id}
                sx={{ display: "flex", justifyContent: "space-between" }}
            >
                <Typography sx={{ py: 2 }} flexWrap="wrap">{`${
                    item.id + 1
                }.`}</Typography>
                <Box bgcolor="#F6FAFD" sx={{ p: 1, m: 1, borderRadius: "10%" }}>
                    <Typography>
                        <pre style={{ fontFamily: "inherit" }}>
                            {item.question}
                        </pre>
                    </Typography>
                </Box>
                <Box bgcolor="#f5ffea" sx={{ p: 1, m: 1, borderRadius: "10%" }}>
                    <Typography>
                        <pre style={{ fontFamily: "inherit" }}>
                            {item.answer}
                        </pre>
                    </Typography>
                </Box>
                <Button
                    onClick={() => {
                        onHandleDelete(item.id);
                    }}
                    startIcon={<DeleteIcon />}
                ></Button>
            </Box>
        );
    });

    const onClickAddItem = (itemAdded: Item) => {
        props.setAddedItems([...props.addedItems, itemAdded]);
    };

    return (
        <Box
            sx={{
                display: "flex",
                height: "100%",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
                my: 12,
                mx: "26%",
            }}
        >
            <Button
                variant="contained"
                onClick={() => props.setIsPracticingCards(true)}
            >
                Practice Cards
            </Button>

            {Items}
            <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box>
                    <TextField
                        id="outlined-basic"
                        label="Add question"
                        multiline
                        defaultValue={currentQuestion}
                        sx={{ mx: 2 }}
                        onInput={(e) =>
                            setCurrentQuestion(
                                (e.target as HTMLInputElement).value
                            )
                        }
                        variant="standard"
                    />
                </Box>
                <Box>
                    <TextField
                        id="outlined-basic"
                        label="Add answer"
                        multiline
                        defaultValue={currentAnswer}
                        onInput={(e) =>
                            setCurrentAnswer(
                                (e.target as HTMLInputElement).value
                            )
                        }
                        variant="standard"
                    />
                </Box>
            </Box>
            <Button
                onClick={() =>
                    onClickAddItem({
                        question: currentQuestion,
                        answer: currentAnswer,
                        id: props.addedItems.length,
                    })
                }
            >
                {" "}
                Add Item{" "}
            </Button>
        </Box>
    );
};

export default AddCard;
