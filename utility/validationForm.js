import * as yup from "yup"


export default function ValidationForm (){
    const schemaCreateJob=yup.object({
        title: yup.string().required().min(3),
        content: yup.string().required().min(3),
        city: yup.string().required().min(3),
        cat: yup.string().required().min(3),
    })
    const schemaCreateApplyer=yup.object({
        name: yup.string().required().min(3),
        email: yup.string().required().email(),
        cv: yup.string().required().min(3)
    })
    const schemaSearch=yup.object({
        cat: yup.string().required().min(3),
    })
    return {
        schemaCreateJob:schemaCreateJob,
        schemaCreateApplyer:schemaCreateApplyer,
        schemaSearch:schemaSearch
    };
}