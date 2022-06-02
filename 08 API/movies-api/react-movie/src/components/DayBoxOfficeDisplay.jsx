import styled from 'styled-components';

const BoxOfficeBlock = styled.div`
    display: flex;

    .thumbnail {
        margin-right: 1rem;
        img {
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        };
    };

    .contents {
        h2 {
            margin: 0;
        };
        p {
            margin: 0;
            line-height: 1.5;
            margin: 0.5rem;
            white-space: normal;
        };
    };

    & + & {
        margin-top: 3rem;
    };
`;

const DayBoxOfficeDisplay = (boxOffice) => {
    const {movieCd, movieNm, salesAcc} = boxOffice;
    return (
        <div>
            <BoxOfficeBlock>
                <div className='contents'>
                    <h2>{movieNm}</h2>
                    <h3>{saleAcc}</h3>
                    <p>{movieCd}</p>
                </div>
            </BoxOfficeBlock>
        </div>
    );
};

export default DayBoxOfficeDisplay;