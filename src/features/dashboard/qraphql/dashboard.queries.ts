import { gql } from '@apollo/client';

export const GET_DASHBOARD = gql`
  query GetDashboard {
    countries {
      code
      name
      continent {
        code
        name
      }
      languages {
        code
        name
      }
    }

    continents {
      code
      name
    }

    languages {
      code
      name
    }
  }
`;