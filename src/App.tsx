import React, { FC, useEffect, useState } from "react";
import AddCard, { Item } from "./AddCard";
import "./App.css";
import CardView from "./CardView";
import { getStudyItems, saveStudyItems } from "./model/StudyItem";

const App: FC = () => {
    const [isPracticingCards, setIsPracticingCards] = useState(false);
    const [addedItems, setAddedItems] = useState<Item[]>(
        getStudyItems() as Item[]
    );
    useEffect(() => {
        saveStudyItems(addedItems);
    }, addedItems);
    return !isPracticingCards ? (
        <AddCard
            addedItems={addedItems}
            setAddedItems={setAddedItems}
            setIsPracticingCards={setIsPracticingCards}
        />
    ) : (
        <CardView
            setIsPracticingCards={setIsPracticingCards}
            addedItems={addedItems}
        />
    );
};

export default App;
