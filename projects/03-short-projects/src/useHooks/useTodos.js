import { useState } from "react";

export function useTodos ({ taskList }) {
    const [ searchText, setSearchText ] = useState('')
    const [ openModal, setOpenModal ] = useState(false)

    // if (!searchText) {
    //     filteredTasks = taskList;
    //   } else {
    //     filteredTasks = taskList.filter(todo => {
    //       const todoText = todo.text.toLowerCase();
    //       const searchText = searchValue.toLowerCase();
    //       return todoText.includes(searchText);
    //     });
    //   }

      return (
        {
            searchText,
            setSearchText
        }
      )

}