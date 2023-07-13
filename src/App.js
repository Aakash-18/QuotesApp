import React, { Suspense } from "react";

import { Route, Routes, Navigate } from "react-router-dom";
//import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));

function App() {
  return (
    <div>
      <Layout>
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
          <Routes>
            <Route path="/" exact element={<Navigate to="quotes" />}></Route>
            <Route path="/quotes" element={<AllQuotes></AllQuotes>}></Route>
            <Route
              path="/quotes/:quoteId/*"
              element={<QuoteDetail> </QuoteDetail>}
            ></Route>
            <Route path="/new-quote" element={<NewQuote></NewQuote>}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
