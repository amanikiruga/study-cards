export type StudyItem = {
    question: string;
    answer: string;
};

export const saveStudyItems = (itemsToSave: StudyItem[]) => {
    localStorage.setItem("studyItems", JSON.stringify(itemsToSave));
};

export const getStudyItems = (): StudyItem[] => {
    let studyItems = localStorage.getItem("studyItems");
    return studyItems ? JSON.parse(studyItems) : [];
};
