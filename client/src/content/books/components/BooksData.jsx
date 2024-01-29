import React, { lazy,Suspense } from "react";
import { useFetchBooks } from "../hooks/useBooksHooks"
// import BookItems from "./BookItems"

const BookItems = lazy(() => import('./BookItems'));

const BooksData = () => {

    const { booksData, isLoading, isError, error } = useFetchBooks()

    // if (isLoading) {
    //     return <div>Loading...</div>
    // }

    if (isError) {
        console.log("hola", error);
        return <div>something went wrong...</div>
    }

    return (
        <section className="my-12">
            <h1 className="text-2xl ">
                Books , on stock :
            </h1><hr className="mb-5" />
            <Suspense fallback={<div>Loading2...</div>}>
                <div className="grid grid-cols-2 gap-11">
                    {
                        booksData?.map((p) => {
                            return <BookItems key={p?._id} {...p} />
                        })
                    }
                </div>
            </Suspense>
        </section>
    )

};

export default BooksData;
