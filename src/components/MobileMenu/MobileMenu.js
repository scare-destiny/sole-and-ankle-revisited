/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components/macro'
import { DialogOverlay, DialogContent } from '@reach/dialog'

import { QUERIES, COLORS, WEIGHTS } from '../../constants'

import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const MobileMenu = ({ isOpen, onDismiss }) => {
	if (!isOpen) {
		return null
	}

	return (
		<Overlay>
			<Icon
				id='close'
				strokeWidth={2}
				onClick={onDismiss}
				style={{ padding: '32px 22px' }}
			/>
			<Content>
				<Link href='/sale'>Sale</Link>
				<Link href='/new'>New&nbsp;Releases</Link>
				<Link href='/men'>Men</Link>
				<Link href='/women'>Women</Link>
				<Link href='/kids'>Kids</Link>
				<Link href='/collections'>Collections</Link>
			</Content>
			<Footer>
				<FooterLink href='/terms'>Terms and Conditions</FooterLink>
				<FooterLink href='/privacy'>Privacy Policy</FooterLink>
				<FooterLink href='/contact'>Contact Us</FooterLink>
			</Footer>
		</Overlay>
	)
}

const Overlay = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: 2;
	background: ${COLORS.white};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
	width: 80%;
`

const Content = styled.nav`
	display: flex;
	flex-direction: column;
	border-radius: 8px;
	width: 100%;
	font-size: 1.125rem;
	padding: 32px;
`

const Footer = styled.footer`
	padding: 32px;
	align-self: flex-start;
`

const Link = styled.a`
	display: block;
	text-decoration: none;
	font-weight: ${WEIGHTS.medium};
	font-size: 1.125rem;
	color: ${COLORS.gray[900]};
	line-height: 2.225;
	text-transform: uppercase;
`

const FooterLink = styled(Link)`
	font-weight: ${WEIGHTS.normal};
	font-size: 0.875rem;
	color: ${COLORS.gray[700]};
`

export default MobileMenu
