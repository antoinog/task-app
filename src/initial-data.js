const initialData = {
    tasks: {
        'task-1': {
            id: `task-1`,
            content: `this is task 1`
        },
        'task-6': {
            id: `task-6`,
            content: `this is task 6`
        },
        'task-3': {
            id: `task-3`,
            content: `this is task 3`
        },
        'task-4': {
            id: `task-4`,
            content: `this is task 4`
        }
    },
    columns: {
        'column-1':
            {
                id: `column-1`,
                title: `todo`,
                taskIds: [
                    `task-1`,
                    `task-3`,
                    `task-6`,
                    `task-4`,
                ]
            }
    },
    columnOrder: ['column-1']
}
export default initialData;
