import React, { useEffect, useState } from 'react';
import ResultItem from './result-item';
import { useDispatch, useSelector } from 'react-redux';
import { searchFilterThunk, searchThunk } from '../../services/ticketmaster-thunks';
import { useLocation } from 'react-router';

const ResultList = () => {
    let { result, loading } = useSelector((state) => state.result);
    if (result === 'Exceeded Ticketmaster API rate limit. Please wait and try again.') {
        loading = !loading;
    }
    const dispatch = useDispatch();

    const link = useLocation();
    const queryParams = new URLSearchParams(link.search);
    const location = queryParams.get('city');
    const keyword = queryParams.get('keyword');

    const type = queryParams.get('type');

    if (type === 'Exclusive Events') {
        result = [];
    }

    useEffect(() => {
        dispatch(searchFilterThunk({ location, keyword }));
    }, []);

    return (
        <ul className="list-group">
            {loading && (
                <div>
                    Exceeded Ticketmaster API rate limit. Please wait and try again.
                </div>
            )}
            {!loading &&
                result.map((result) => <ResultItem key={result._id} result={result} />)}
        </ul>
    );
};

export default ResultList;
