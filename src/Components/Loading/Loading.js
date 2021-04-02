import React from 'react';

const Loading = () => {
    return (
        <div className="d-flex justify-content-center align-items-center w-100">
            <div class="spinner-border text-warning text-center" style={{ width: '3rem', height: '3rem' }} role="status">
            </div>
        </div>

    );
};

export default Loading;