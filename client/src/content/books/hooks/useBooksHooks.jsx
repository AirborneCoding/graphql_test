import {
    useQueryClient,
    useQuery,
    useMutation
} from "@tanstack/react-query";
import { addBook, fetchBooks } from "../Apis";

export const useFetchBooks = () => {
    const { data: booksData, isLoading, isError, error } = useQuery({
        queryKey: ["books"],
        queryFn: fetchBooks
    })

    return { booksData, isLoading, isError, error }
};


export const useAddBook = () => {
    const queryClient = useQueryClient();
    const { mutate: newBook, error, isError, isPending } = useMutation({
        queryKey: ["book"],
        mutationFn: (data) => addBook(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['books'] });
        }
    })

    return { newBook, error, isError, isPending }
};

