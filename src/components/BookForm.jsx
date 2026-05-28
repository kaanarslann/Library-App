import { useForm } from "react-hook-form"
import { useEffect } from "react";

export default function BookForm({defaultValues, onSubmit}) {
    
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
        setError,
        clearErrors
    } = useForm();


    useEffect(() => {
        if (defaultValues?.book) {
            reset({
                ...defaultValues.book,
            available: String(defaultValues.book.available)
        });
        }
    }, [defaultValues]);
    
    return (
        <>
            <section className="flex justify-center mt-10">
                <form className="border-2 border-gray-700 bg-gray-50 px-10 py-5 flex flex-col gap-5 rounded-xl" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-[120px_1fr] gap-y-5">
                        <label htmlFor="title" className="font-semibold text-lg">Title</label>
                        <div>
                            <input type="text" className="border rounded" id="title" {...register("title", {
                                required: "Title is required.",
                                minLength: {
                                    value: 3,
                                    message: "Title is too short."
                                }
                            })}/>
                            {errors.title && (
                                <p className="text-red-500">{errors.title.message}</p>
                            )}
                        </div>
                        <label htmlFor="author" className="font-semibold text-lg">Author</label>
                        <div>
                            <input type="text" className="border rounded" id="author" {...register("author", {
                                required: "Author is required.",
                                minLength: {
                                    value: 3,
                                    message: "Author is too short."
                                }
                            })}/>
                            {errors.author && (
                                <p className="text-red-500">{errors.author.message}</p>
                            )}
                        </div>
                        <label htmlFor="year" className="font-semibold text-lg">Year</label>
                        <div>
                            <input type="text" className="border rounded" id="year" {...register("year", {
                                valueAsNumber: true,
                                required: "Year is required",
                                min: {
                                    value: 1500,
                                    message: "Invalid year."
                                },
                                max: {
                                    value: new Date().getFullYear(),
                                    message: "Invalid year."
                                }
                            })}/>
                            {errors.year && (
                                <p className="text-red-500">{errors.year.message}</p>
                            )}
                        </div>
                        <label htmlFor="condition" className="font-semibold text-lg">Condition</label>
                        <div>
                            <select className="border rounded" id="condition" {...register("condition", {
                                required: "Condition is required"
                            })}>
                                <option value="">Select Condition</option>
                                <option value="Excellent">Excellent</option>
                                <option value="Good">Good</option>
                                <option value="Bad">Bad</option>
                            </select>
                            {errors.condition && (
                                <p className="text-red-500">{errors.condition.message}</p>
                            )}
                        </div>
                        <h3 className="font-semibold text-lg">Status</h3>
                        <div className="flex flex-col">
                            <div className="flex gap-10">
                                <label className="flex gap-2">
                                    <input type="radio" name="available" id="available" value="true" {...register("available", {required: "Status is required"})}/>
                                    Available
                                </label>
                                <label className="flex gap-2">
                                    <input type="radio" name="available" id="available" value="false" {...register("available", {required: "Status is required"})}/>
                                    Lent
                                </label>
                            </div>
                            {errors.available && (
                                <p className="text-red-500">{errors.available.message}</p>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-blue-500 text-white border rounded-lg px-4 py-2">Save</button>
                    </div>
                </form>   
            </section>
        </>
    )
}