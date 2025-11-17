interface ModPageProps {
  local_path: string;
}

export default ({ local_path }: ModPageProps) => {
  return <p>{decodeURIComponent(local_path)}</p>;
};
