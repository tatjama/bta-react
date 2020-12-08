export default function validateCommentForm(values) {
    let errors = {};

    if(!values.travel_date){
        errors.travel_date = "Travel date is required";
    }
    if(!values.title){
        errors.title = "Title is required!";
    }
    if(!values.text){
        errors.text = "Comment is required!";
    }
    if(!values.rating){
        errors.rating = "Rating is required"
    }
    return errors;
}