import React, { Component } from 'react'
import { Segment, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
export default class MenuExampleSecondary extends Component {
    state = { activeItem: 'abc' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state
        return (
            <Segment inverted>
                <Menu inverted pointing secondary>
                    <Menu.Item
                        as={NavLink} to="/home"
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        as={NavLink} to="/about"
                        name='about'
                        active={activeItem === 'about'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        as={NavLink} to="/profile"
                        name='my profile'
                        active={activeItem === 'profile'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
            </Segment>
        )
    }
}