import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LinkCard } from "../components/LinkCard";
import { Loader } from "../components/Loader";
import { AuthContext } from "../context/auth.context";
import { useHttp } from "../hooks/http.hook";

export const DetailPage = () => {
  const { token } = useContext(AuthContext);
  const [link, setLink] = useState(null);
  const linkId = useParams().id;
  const { request, loading } = useHttp();

  const getLink = useCallback(async () => {
    try {
      const fetched = await request(`/api/link/${linkId}`, "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      console.log(fetched);
      setLink(fetched);
    } catch (e) {}
  }, [token, linkId, request]);

  useEffect(() => getLink(), [getLink]);

  if (loading) {
    <Loader />;
  }
  return <>{!loading && link && <LinkCard link={link} />}</>;
};
