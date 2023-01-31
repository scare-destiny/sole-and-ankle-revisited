import React from 'react'
import styled from 'styled-components/macro'

import { COLORS, WEIGHTS, QUERIES } from '../../constants'
import Logo from '../Logo'
import Icon from '../Icon'
import SuperHeader from '../SuperHeader'
import MobileMenu from '../MobileMenu'

const Header = () => {
	const [showMobileMenu, setShowMobileMenu] = React.useState(false)

	// For our mobile hamburger menu, we'll want to use a button
	// with an onClick handler, something like this:
	//
	// <button onClick={() => setShowMobileMenu(true)}>

	return (
		<header>
			<SuperHeader />
			<MainHeader>
				<Side>
					<Logo />
				</Side>
				<Nav>
					<NavLink href='/sale'>A VENDRE</NavLink>
					<NavLink href='/new'>NOUEVELLES HUELLES</NavLink>
					<NavLink href='/men'>HOMMES</NavLink>
					<NavLink href='/women'>FEMMES</NavLink>
					<NavLink href='/kids'>LES ENFANTS</NavLink>
					<NavLink href='/collections'>Collections</NavLink>
				</Nav>
				<Side>
					<MobileNav>
						{' '}
						<Icon id='shopping-bag' strokeWidth={2} />
						<Icon id='search' strokeWidth={2} />
						<Icon id='menu' strokeWidth={2} onClick={() => setShowMobileMenu(true)} />
					</MobileNav>
				</Side>
			</MainHeader>

			<MobileMenu
				isOpen={showMobileMenu}
				onDismiss={() => setShowMobileMenu(false)}
			/>
		</header>
	)
}

const MainHeader = styled.div`
	display: flex;
	align-items: baseline;
	padding: 18px 32px;
	height: 72px;
	border-bottom: 1px solid ${COLORS.gray[300]};

	@media ${QUERIES.laptopAndDown} {
		align-items: center;
		padding: 8px 16px;
	}
`

const Nav = styled.nav`
	display: flex;
	gap: clamp(1.2rem, 2.1vw + 1rem, 3.6rem);
	margin: 0px 48px;

	@media ${QUERIES.laptopAndDown} {
		display: none;
	}
`
const MobileNav = styled.nav`
	display: none;

	@media ${QUERIES.laptopAndDown} {
		display: flex;
		justify-content: flex-end;
		/* gap: 40px; */
	}

	@media ${QUERIES.phoneAndDown} {
		/* gap: 20px; */
	}
`

const Side = styled.div`
	flex: 1;
`

const NavLink = styled.a`
	font-size: 1.125rem;
	text-transform: uppercase;
	text-decoration: none;
	color: ${COLORS.gray[900]};
	font-weight: ${WEIGHTS.medium};

	&:first-of-type {
		color: ${COLORS.secondary};
	}
`

export default Header
