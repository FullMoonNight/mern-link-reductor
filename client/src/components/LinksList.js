import React from "react";
import { Link } from "react-router-dom";

export const LinksList = ({ links }) => {
  if (!links?.length) return <p>Ссылок пока нет</p>;
  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Оригинальная</th>
          <th>Сокращенная</th>
          <th>Открыть</th>
        </tr>
      </thead>

      <tbody>
        {links.map((link, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{link.from}</td>
            <td>{link.to}</td>
            <Link to={`/detail/${link._id}`}>Открыть</Link>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
