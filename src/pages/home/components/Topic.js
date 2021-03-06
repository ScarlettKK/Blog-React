import React, { Component } from 'react';
import { TopicWrapper, TopicItem } from '../style'
import { connect } from 'react-redux'

class Topic extends Component {
	render() {
		const { list } = this.props;
		return (
			<TopicWrapper>
				{
					list.map((item)=>(		
						<TopicItem key={item.get('id')}>
							<img 
								className='topic-pic'
								src={item.get('imgurl')}
								alt=''
							/>
							{item.get('title')}
						</TopicItem>
					))
				}
			</TopicWrapper>
		)
	}
}

const mapStateToProps = (state) => ({
	list: state.getIn(['home','topicList'])
	// 代码优化（简写）
})

export default connect(mapStateToProps, null)(Topic)
// 这里的组件不会改store里面的数据，所以第二个参数传递null