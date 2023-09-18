import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    fetchQuote,
    selectQuote,
    selectIsLoading,
    selectError,
} from './quoteSlice';

import './Quote.scss';

const Quote = () => {
    const [quoteContent, setQuoteContent] = useState('');
    const [quoteAuthor, setQuoteAuthor] = useState('');

    const dispatch = useDispatch();
    const quote = useSelector(selectQuote);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchQuote());
    }, [dispatch])

   useEffect(() => {
        if (quote) {
            setQuoteContent(quote.content);
            setQuoteAuthor(quote.author);
        }
    }, [quote]);

    // useEffect(() => {
    //     if (quoteContent && quoteAuthor) {
    //         console.log('Quote.jsx useEffect quoteContent: ' + quoteContent + ', quoteAuthor: ' + quoteAuthor);
    //     }
    // }, [quoteContent, quoteAuthor]);

    if(isLoading) {
        return <h1>Loading...</h1>;
    }

    if(error) {
        console.error(error.message || error);
        return <h1>Error: {error.message || error}</h1>;
    }


    return(
        <div className="quote-container">
            <hr />
            <div className="quote-text">{quoteContent}</div>
            <div className="quote-author">- {quoteAuthor}</div>
        </div>
    );
}

export default Quote;