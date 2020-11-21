import React, { memo } from 'react';
import PropTypes from 'prop-types';

import {
    RecommendTitleWrapper
} from './style';

const JCRecommendTitle = memo(function (props) {
    const { title, keywords } = props;

    return (
        <RecommendTitleWrapper className="sprite_02">
            <div className="left">
                <h3 className="title">{title}</h3>
                <div className="keyword">
                    {
                        keywords.map((item, index) => {
                            return (
                                <div key={item} className="item">
                                    <span className="link">{item}</span>
                                    <span className="divider">|</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            
            <div className="right">
                <span>更多</span>
                <i className="icon sprite_02"></i>
            </div>
        </RecommendTitleWrapper>
    )
})

JCRecommendTitle.propTypes = {
    title: PropTypes.string.isRequired,
    keywords: PropTypes.array
}

JCRecommendTitle.defaultProps = {
    keywords: []
}

export default JCRecommendTitle;