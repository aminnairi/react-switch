import React, { useEffect, useState } from 'react'
import { Switch, Case, Default, DefaultSwitch } from "@aminnairi/react-switch";

interface Article {
  id: number;
  title: string;
  body: string;
}

export const Main = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [articles, setArticles] = useState<Array<Article>>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(new Error("Unable to fetch articles."));
    }).then(json => {
      setArticles(json);
    }).catch((error: unknown) => {
      setError(String(error));
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <Switch>
      <Case when={loading}>
        <p>Loading your articles, please wait...</p>
      </Case>
      <Case when={Boolean(error)}>
        <p>Something went wrong: {error}</p>
      </Case>
      <DefaultSwitch>
        <Case when={articles.length === 0}>
          <p>There is no articles to display.</p>
        </Case>
        <Case when={articles.length === 1}>
          <p>You have {articles.length} published article.</p>
        </Case>
        <Default>
          <p>You have {articles.length} published articles.</p>
        </Default>
      </DefaultSwitch>
    </Switch>
  );
};
