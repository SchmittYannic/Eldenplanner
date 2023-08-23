import { FilterFn } from "@tanstack/react-table";
import { rankItem } from "@tanstack/match-sorter-utils";

const FuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    // Rank the item
    const itemRank = rankItem(row.getValue(columnId), value)

    // Store the itemRank info
    addMeta({
        itemRank,
    })

    // Return if the item should be filtered in/out
    return itemRank.passed
};

export default FuzzyFilter