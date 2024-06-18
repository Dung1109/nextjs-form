"use client";

import { useForm } from "react-hook-form";

type InputData = {
    name: string;
    password: string;
    confirmPassword: string;
};

export default function ReactHookForm() {
    const { register, handleSubmit, watch, formState: {errors}, } = useForm<InputData>();


    
}
