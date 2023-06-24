import BookingForm from "./BookingForm";

export default function BookingPage(props){
    return <BookingForm newAt={props.newAt} updateFunc={props.updateFunc} />;
}