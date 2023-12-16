import axios from "axios";
import { useState, useEffect } from "react";

interface IPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: {
    footnotes: string;
  };
  categories: Array<number>;
  tags: Array<number>;
  _links: {
    self: [
      {
        href: string;
      }
    ];
    collection: [
      {
        href: string;
      }
    ];
    about: [
      {
        href: string;
      }
    ];
    author: [
      {
        embeddable: boolean;
        href: string;
      }
    ];
    replies: [
      {
        embeddable: boolean;
        href: string;
      }
    ];
    "version-history": [
      {
        count: number;
        href: string;
      }
    ];
    "wp:attachment": [
      {
        href: string;
      }
    ];
    "wp:term": [
      {
        taxonomy: string;
        embeddable: boolean;
        href: string;
      },
      {
        taxonomy: string;
        embeddable: boolean;
        href: string;
      }
    ];
    curies: [
      {
        name: string;
        href: string;
        templated: boolean;
      }
    ];
  };
}

export const usePosts = () => {
  const [posts, setPosts] = useState<Array<IPost>>([]);
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    setLoading(true);
    const { data } = await axios.get<Array<IPost>>(
      "http://droni.local/wp-json/wp/v2/posts/"
    );

    setPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return { posts, loading };
};
