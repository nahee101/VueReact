import styled from 'styled-components';

const NewsItemBlock = styled.div`
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

const NewsItem = ({news}) => {
    const {title, url, description, urlToImage} = news;
    return(
        <div>
            <NewsItemBlock>
                {
                    /* jsx 언어 && */
                    urlToImage&& (
                        <div className='thumbnail'>
                            <a href={url}>
                                <img src={urlToImage} alt="" />
                            </a>
                        </div>
                    )
                };
                
                <div className='contents'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </NewsItemBlock>
        </div>
    );
};

export default NewsItem;