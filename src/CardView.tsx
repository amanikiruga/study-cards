import {
    Box,
    Card,
    CardContent,
    FormGroup,
    FormControlLabel,
    Button,
    Switch,
    CardMedia,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { Item } from "./AddCard";

type CardViewProps = {
    addedItems: Item[];
    setIsPracticingCards: (state: boolean) => void;
};

const CardView = (props: CardViewProps) => {
    const [revealAnswer, setRevealAnswer] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isRandomizeCards, setIsRandomizeCards] = useState(false);

    const onHandleNextClick = () => {
        const idsNotCurrent = Array.from(
            Array(props.addedItems.length).keys()
        ).filter((id) => id != props.addedItems[currentIndex].id);
        if (isRandomizeCards) {
            setCurrentIndex(
                idsNotCurrent[
                    Math.floor(Math.random() * (props.addedItems.length - 1))
                ]
            );
        } else
            setCurrentIndex(
                Math.min(currentIndex + 1, props.addedItems.length - 1)
            );
    };
    // const testArray = ["hello"];

    const showAddedItems = props.addedItems.map((item) => {
        return (
            <div className={`flip-card ${revealAnswer ? "reveal-answer" : ""}`}>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="card-content">{item.question}</div>
                    </div>
                    <div className="flip-card-back">
                        <div className="card-content">{item.answer}</div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="card-view">
            <div className="card-view-controls">
                <Button
                    variant="outlined"
                    onClick={() => {
                        props.setIsPracticingCards(false);
                    }}
                >
                    Modify Cards
                </Button>
                <FormGroup row={true}>
                    <FormControlLabel
                        checked={revealAnswer}
                        onChange={(ev) => {
                            setRevealAnswer(
                                (ev.target as HTMLInputElement).checked
                            );
                        }}
                        control={<Switch />}
                        label="Reveal Answers"
                    />
                    <FormControlLabel
                        checked={isRandomizeCards}
                        onChange={(ev) => {
                            setIsRandomizeCards(
                                (ev.target as HTMLInputElement).checked
                            );
                        }}
                        control={<Switch />}
                        label="Randomize Cards"
                    />
                </FormGroup>
            </div>
            <div className="card-view-header">
                <Typography
                    variant="h5"
                    component="h2"
                    color="#2a77d2"
                    textAlign="center"
                >
                    Long press card to view answer
                </Typography>
            </div>
            <div className="card-view-center">
                <Button
                    variant="outlined"
                    onClick={() => {
                        setCurrentIndex(Math.max(currentIndex - 1, 0));
                    }}
                    sx={{ mx: 3 }}
                >
                    〈{" "}
                </Button>
                {showAddedItems[currentIndex]}

                <Button
                    variant="outlined"
                    onClick={onHandleNextClick}
                    sx={{ mx: 3 }}
                >
                    〉
                </Button>
            </div>
        </div>
    ); //showAddedItems.length ?
};

export default CardView;
