import React, { useState, useEffect } from "react";
import { Loader } from "./Loader";
import { Post } from "./Post";
import { PaginationButtonsList } from "./PaginationButtonsList";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageItem, setPageItem] = useState(5);
  const [loader, setLoader] = useState(false);

  const fetchDataApi = async () => {
    let url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${pageItem}`;
    setLoader(true);
    let data = await fetch(url);
    let myData = await data.json();
    setPosts(myData);
    setLoader(false);
  };

  useEffect(() => {
    fetchDataApi();
  }, [page]);

  const fetchMoreData = (pageNo) => {
    setPage(pageNo);
  };

  return (
    <>
      {loader ? <Loader /> : <Post posts={posts} />}
      <PaginationButtonsList fetchMoreData={fetchMoreData} page={page} />
    </>
  );
};

export { PostList };
