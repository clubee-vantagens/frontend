import { styled } from 'styled-components'

const TagFooter = styled.footer`
  margin-top: 50px
`

const TagA = styled.a`
  font-weight: 500;
  color: #000000;
  text-decoration: inherit;
`

function Footer() {
  return (
    <TagFooter>Não tem conta? Se <TagA>cadastre agora</TagA>!</TagFooter>
  )
}

export default Footer