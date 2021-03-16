declare global {
  declare module "react" {
    interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
      jsx?: boolean | string;
      global?: boolean;
    }
  }
}