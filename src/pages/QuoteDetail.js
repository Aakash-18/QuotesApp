import { useParams, Routes, Route, Link } from "react-router-dom";
import { Fragment } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Sanjay", text: "Learning React is fun!" },
  { id: "q2", author: "Santhosh", text: "Learning React is great!" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <Fragment>
      <Routes>
        <HighlightedQuote text={quote.text} author={quote.author} />
        <Route path={`/quotes/${params.quote}`} exact></Route>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>

        <Route
          path="quotes/:quoteId/comments"
          element={<Comments></Comments>}
        ></Route>
      </Routes>
    </Fragment>
  );
};

export default QuoteDetail;
