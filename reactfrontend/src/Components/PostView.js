import React, { Component } from 'react'

const dummy_prop = {
    title: '테스트용 타이틀',
    content: '테스트용 글',
}


export default class PostView extends Component {
    render() {
        const {title, content} = this.props
        return (
            <div>
                <div class="card">
                    <a href="#">
                        <div class="card-header">
                            <div class="card-header-is_closed"> 
                                <div> 프사 </div> 
                            </div>
                        </div>
                    </a>
                    <div class="card-body">
                        <a href="#"></a>
                        <div class="card-body-header">
                            <a onClick={this.handleOpenModal} href="#">
                            <h1>{title}</h1>
                            </a>    
                            <p class="card-body-nickname"> 
                                {/* 올린사람: 잉여 */}
                            </p>
                        </div>
                        <p class="card-body-description">
                            {content}
                        </p>
                    </div>
                </div>
            </div>  
        )
    }
}