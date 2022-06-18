/// <reference lib="dom" />

import * as dataSource from '../../mock-data/todo-list.json';

interface PageData {
  list: Todo[];
}

interface PageMethods {
  fetchTodoList(): any;
}

Page<PageData, PageMethods>({
  data: { list: [] },

  // Page is loaded
  // @ts-ignore
  onLoad(query = {}) {
        // fetch todo list
        this.fetchTodoList();
  },

  // page showed on background or visible
  onShow() {},
  // initial rendering completed
  onReady() {

  },
  // page is hidden or moved to other page
  onHide() {},
  // page destroyed
  onUnload() {},
  // on refresh event
  onPullDownRefresh() {
    this.fetchTodoList();
  },

  fetchTodoList() {
    const newData = [...dataSource.data]
    this.setData({ list: newData });
  }
});
