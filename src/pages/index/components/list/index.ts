interface ComponentData {
  list: any[];
}

interface ComponentProps {
  list: any[];
}

// too lazy to write T_T
interface ComponentMethods {}

Component<ComponentData, ComponentProps, ComponentMethods>({
  data: {
    list: [],
  },
  props: {
    list: [],
  },
  onInit() {
    this.setData({ list: this.props.list });
  },
  didMount() {},
  didUpdate(_prevProps, _prevData) {
    if (_prevData.list.length == this.data.list.length && 
      _prevProps.list.length == this.props.list.length) {
      this.setData({ list: this.props.list });
    }
  },
  didUnmount() {},
  deriveDataFromProps() {},
  // ko biết type của mấy cái e nên tạm any
  methods: {
    onCheckboxChange(e: any) {
      const newList = [...this.data.list];

      const checkedIds = e.detail.value;
      for (let i = 0; i < newList.length; i++) {
        if (checkedIds.includes(newList[i].id)) {
          newList[i].checked = true;
        } else {
          newList[i].checked = false;
        }
      }
      this.setData({ list: newList });
    },
    showTodoItem(e: any) {
      const newList = [...this.data.list];

      const selected = e.currentTarget.dataset['todo-item'];
      for (let i = 0; i < newList.length; i++) {
        if (selected.id == newList[i].id) {
          newList[i].showing = !newList[i].showing;
        }
      }
      this.setData({ list: newList });
    },
    removeTodoItem(e: any) {
      const newList = [...this.data.list];

      const selected = e.currentTarget.dataset['todo-item'];
      for (let i = 0; i < newList.length; i++) {
        if (selected.id == newList[i].id) {
          newList.splice(i, 1);
        }
      }
      this.setData({ list: newList });
    },
  },
});
