export interface props {
  notion: string;
  github: string;
  domain: string;
}

export const RelevantLink = ({ notion, github, domain }: props) => {
  return (
    <ul>
      {notion !== "" ? (
        <li>
          개발관리 페이지 : <a href={notion}>Notion</a>
        </li>
      ) : null}
      {github !== "" ? (
        <li>
          깃허브 레포 : <a href={github}>Repository</a>
        </li>
      ) : null}
      {domain !== "" ? (
        <li>
          홈페이지 : <a href={domain}>{domain}</a>
        </li>
      ) : null}
    </ul>
  );
};
