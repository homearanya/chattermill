import * as React from 'react';
import { Container, InnerContainer, Details, Brands } from './book-demo-details.styled'
import logo from '../../images/logo-text.svg'
import { Link } from 'gatsby';
interface BookDemoDetailsProps {
  data: {
    logo: {
      publicURL: string
    }
    title: string
    upTitle: string
    subTitle: string
    brandsSection: {
      title: string
      brands: {
        alt ?: string
        logo: {
          publicURL: string
        }
      }[]
    }
  }
}

const BookDemoDetails: React.FC<BookDemoDetailsProps> = ({ data }) => {
  return (
    <Container>
      <InnerContainer>
        <Link to='/'>
          <img src={logo} />
        </Link>
        <Details>
          <h3>{data.upTitle}</h3>
          <h1>{data.title}</h1>
          <h5>{data.subTitle}</h5>
        </Details>
        <Brands>
          <h2>{data.brandsSection.title}</h2>
          <div>
            {data.brandsSection.brands.map(brand => (
              <img src={brand.logo?.publicURL} />
            ))}
          </div>
        </Brands>
      </InnerContainer>
    </Container>
  );
}

export default BookDemoDetails;