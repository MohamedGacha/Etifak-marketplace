import HeaderCSS from "./Header.module.css";

interface HeaderTitleProps {
  children: string;
}

const HeaderTitle = ({ children }: HeaderTitleProps) => {
  return <div className={HeaderCSS.title}>{children}</div>;
};

export default HeaderTitle;
