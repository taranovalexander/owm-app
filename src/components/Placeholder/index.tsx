import "./styles.less";

interface Props {
  dataTestid: string
}

export const Placeholder: React.FC<Props> = ({ dataTestid }) => {
  return (
    <div data-testid={dataTestid} className="placeholder" />
  );
};
