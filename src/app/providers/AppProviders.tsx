import { ApolloAppProvider } from './ApolloAppProvider';

type Props = {
  children: React.ReactNode;
};

export function AppProviders({ children }: Props) {
  return <ApolloAppProvider>{children}</ApolloAppProvider>;
}
