import { Row } from "@tanstack/react-table";

const sortCaseInsensitive = (prev: Row<any>, curr: Row<any>, columnId: string) => {
    if (prev.original[columnId].toLowerCase() > curr.original[columnId].toLowerCase()) {
        return 1;
    } else if (prev.original[columnId].toLowerCase() < curr.original[columnId].toLowerCase()) {
        return -1;
    } else {
        return 0;
    }
}

export default sortCaseInsensitive