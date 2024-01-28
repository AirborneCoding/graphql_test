import { useForm } from "react-hook-form";
import Input from "./Input";
import InputArray from "./InputArray";
import { useAddBook } from "../hooks/useBooksHooks";

const CATEGORIES = [
    'Education',
    'Fiction',
    'Non-Fiction',
    'Science Fiction',
    'History',
    'Mystery',
    'Self-Help',
    'Biography',
];

const Form = () => {
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const { newBook, error, isError, isPending } = useAddBook()

    const onSubmit = (data) => {
        console.log(data)
        newBook(data, {
            onSuccess: () => console.log("great job")
        });

    };

    return (
        <section>
            <h1 className="text-2xl">Add Book</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col">
                    <div className="grid sm:grid-cols-2 gap-5">
                        <Input
                            name="name"
                            label="book name"
                            control={control}
                            rules={{ required: "Name is required" }}
                            errors={errors}
                        />

                        <Input
                            name="author"
                            label="book author"
                            control={control}
                            rules={{ required: "Author is required" }}
                            errors={errors}
                        />

                        <InputArray
                            name="genre"
                            label="book genre"
                            control={control}
                            rules={{ required: "Genre is required" }}
                            errors={errors}
                            array={CATEGORIES}
                        />

                        <Input
                            name="pages"
                            label="pages number"
                            control={control}
                            type="number"
                            rules={{ required: "Pages is required" }}
                            errors={errors}
                        />
                    </div>

                    <button type="submit" className="btn btn-accent w-fit">
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Form;
