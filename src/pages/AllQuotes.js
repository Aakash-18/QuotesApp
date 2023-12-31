import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  { id: "q1", author: "Sanjay", text: "Learning React is fun!" },
  { id: "q2", author: "Santhosh", text: "Learning React is great!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}> </QuoteList>;
};

export default AllQuotes;
