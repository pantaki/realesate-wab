/**
 * Data Realesate
 * Created by taki
 */
export const mockData = {
  board: {
    _id: 'board-id-01',
    title: 'Realesate data',
    description: 'Realesate data description',
    type: 'public', // 'private'
    ownerIds: [], // Những users là Admin của board
    memberIds: [], // Những users là member bình thường của board
    columnOrderIds: ['column-id-01', 'column-id-03', 'column-id-02'], // Thứ tự sắp xếp / vị trí của các Columns trong 1 boards,
    emailsTotal: 3,
    docsTotal: 2,
    noteTotal: 4,
    span: 4,
    columns: [
      {
        _id: 'column-id-01',
        boardId: 'board-id-01',
        title: 'Task Column 01',
        cardOrderIds: ['card-id-01', 'card-id-06', 'card-id-03', 'card-id-04', 'card-id-05', 'card-id-02', 'card-id-07'],
        cards: [
          {
            _id: 'card-id-01',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: 'Title of card 01',
            description: 'Markdown Syntax (sẽ ở khóa nâng cao nhé)',
            cover: 'https://media.discordapp.net/attachments/975603557048930364/1136578893759918160/Hinh-nen-2021_61.jpg?width=885&height=531',
            memberIds: ['user-id-01'],
            comments: ['test comment 01', 'test comment 02'],
            attachments: ['test attachment 01', 'test attachment 02', 'test attachment 03']
          },
          { _id: 'card-id-02', boardId: 'board-id-01', columnId: 'column-id-01', title: 'Title of card Title of card Title of card Title of card Title of card 02', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-03', boardId: 'board-id-01', columnId: 'column-id-01', title: 'Title of card 03', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-04', boardId: 'board-id-01', columnId: 'column-id-01', title: 'Title of card 04', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-05', boardId: 'board-id-01', columnId: 'column-id-01', title: 'Title of card 05', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-06', boardId: 'board-id-01', columnId: 'column-id-01', title: 'Title of card 06', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-07', boardId: 'board-id-01', columnId: 'column-id-01', title: 'Title of card 07', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-02',
        boardId: 'board-id-01',
        title: 'Task Column 02',
        cardOrderIds: ['card-id-08', 'card-id-09', 'card-id-10'],
        cards: [
          { _id: 'card-id-08', boardId: 'board-id-01', columnId: 'column-id-02', title: 'Title of card 08', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-09', boardId: 'board-id-01', columnId: 'column-id-02', title: 'Title of card 09', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-10', boardId: 'board-id-01', columnId: 'column-id-02', title: 'Title of card 10', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-03',
        boardId: 'board-id-01',
        title: 'Task Column 03',
        cardOrderIds: ['card-id-11', 'card-id-12', 'card-id-13'],
        cards: [
          { _id: 'card-id-11', boardId: 'board-id-01', columnId: 'column-id-03', title: 'Title of card 11', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-12', boardId: 'board-id-01', columnId: 'column-id-03', title: 'Title of card 12', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-13', boardId: 'board-id-01', columnId: 'column-id-03', title: 'Title of card 13', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      }
    ]
  },
  boards: [{
    _id: 'board-id-01',
    title: 'Realesate (B) T&N Lorem orem Ipsum 1',
    description: 'Realesate data description',
    type: 'public', // 'private'
    ownerIds: [], // Những users là Admin của board
    memberIds: [], // Những users là member bình thường của board
    columnOrderIds: ['column-id-01', 'column-id-02', 'column-id-03', 'column-id-04', 'column-id-05', 'column-id-06'], // Thứ tự sắp xếp / vị trí của các Columns trong 1 boards
    titleNumber: 1,
    emailsTotal: 3,
    docsTotal: 2,
    noteTotal: 4,
    span: 4,
    display: 'none',
    columns: [
      {
        _id: 'column-id-01',
        boardId: 'board-id-01',
        title: 'offer/em',
        cardOrderIds: ['card-id-01', 'card-id-06', 'card-id-03', 'card-id-04', 'card-id-05', 'card-id-02', 'card-id-07'],
        cards: [
          {
            _id: 'card-id-01',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            cardChildrenOrderIds: ['children-id-01', 'children-id-02', 'children-id-03', 'children-id-04'],
            childrens: [
              {
                _id: 'children-id-01',
                boardId: 'board-id-01',
                columnId: 'column-id-01',
                cardId: 'card-id-01',
                childrens: [],
                status: 'task_waiting',
                title: 'Title of children 07',
                description: null, cover: null,
                memberIds: [],
                comments: [],
                attachments: []
              },
              { _id: 'children-id-02', boardId: 'board-id-01', columnId: 'column-id-01', cardId: 'card-id-01', childrens: [], status: 'task_done', title: 'Title of children 07', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-03', boardId: 'board-id-01', columnId: 'column-id-01', cardId: 'card-id-01', childrens: [], status: 'task_waiting', title: 'Title of children 07', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-04', boardId: 'board-id-01', columnId: 'column-id-01', cardId: 'card-id-01', childrens: [], status: 'task_note', title: 'Title of children 07', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
            ],
            status: 'task_done',
            title: 'Title of card 01',
            description: 'Markdown Syntax (sẽ ở khóa nâng cao nhé)',
            cover: 'https://media.discordapp.net/attachments/975603557048930364/1136578893759918160/Hinh-nen-2021_61.jpg?width=885&height=531',
            memberIds: ['user-id-01'],
            comments: ['test comment 01', 'test comment 02'],
            attachments: ['test attachment 01', 'test attachment 02', 'test attachment 03']
          },
          { _id: 'card-id-02', boardId: 'board-id-01', columnId: 'column-id-01', childrens: [], status: 'task_done', title: 'Title of card Title of card Title of card Title of card Title of card 02', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-03', boardId: 'board-id-01', columnId: 'column-id-01', childrens: [], status: 'task_note', title: 'Title of card 03', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-04', boardId: 'board-id-01', columnId: 'column-id-01', childrens: [], status: 'task_done', title: 'Title of card 04', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-05', boardId: 'board-id-01', columnId: 'column-id-01', childrens: [], status: 'task_done', title: 'Title of card 05', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-06', boardId: 'board-id-01', columnId: 'column-id-01', childrens: [], status: 'task_done', title: 'Title of card 06', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-07', boardId: 'board-id-01', columnId: 'column-id-01', childrens: [], status: 'task_waiting', title: 'Title of card 07', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-02',
        boardId: 'board-id-01',
        title: 'inspection',
        cardOrderIds: ['card-id-08', 'card-id-09', 'card-id-10'],
        cards: [
          { _id: 'card-id-08', boardId: 'board-id-01', columnId: 'column-id-02', childrens: [], status: 'task_done', title: 'Title of card 08', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-09', boardId: 'board-id-01', columnId: 'column-id-02', childrens: [], status: 'task_done', title: 'Title of card 09', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-10', boardId: 'board-id-01', columnId: 'column-id-02', childrens: [], status: 'task_waiting', title: 'Title of card 10', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-03',
        boardId: 'board-id-01',
        title: 'financing',
        cardOrderIds: ['card-id-11', 'card-id-12', 'card-id-13', 'card-id-14', 'card-id-15'],
        cards: [
          { _id: 'card-id-11', boardId: 'board-id-01', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'Title of card 11', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-12', boardId: 'board-id-01', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'Title of card 12', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-13', boardId: 'board-id-01', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'Title of card 13', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-14', boardId: 'board-id-01', columnId: 'column-id-03', childrens: [], status: 'task_waiting', title: 'Title of card 14', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-15', boardId: 'board-id-01', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'Title of card 15', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-04',
        boardId: 'board-id-01',
        title: 'title work',
        cardOrderIds: ['card-id-16', 'card-id-17', 'card-id-18'],
        cards: [
          { _id: 'card-id-16', boardId: 'board-id-01', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'Title of card 16', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-17', boardId: 'board-id-01', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'Title of card 17', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-18', boardId: 'board-id-01', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'Title of card 18', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-05',
        boardId: 'board-id-01',
        title: 'closing',
        cardOrderIds: ['card-id-19', 'card-id-20', 'card-id-21', 'card-id-22', 'card-id-23', 'card-id-24'],
        cards: [
          { _id: 'card-id-19', boardId: 'board-id-01', columnId: 'column-id-05', childrens: [], status: 'task_note', title: 'Title of card 19', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-20', boardId: 'board-id-01', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'Title of card 20', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-21', boardId: 'board-id-01', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'Title of card 21', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-22', boardId: 'board-id-01', columnId: 'column-id-05', childrens: [], status: 'task_waiting', title: 'Title of card 22', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-23', boardId: 'board-id-01', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'Title of card 23', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-24', boardId: 'board-id-01', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'Title of card 24', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-06',
        boardId: 'board-id-01',
        title: 'extras',
        cardOrderIds: ['card-id-25', 'card-id-26', 'card-id-27'],
        cards: [
          { _id: 'card-id-25', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'Title of card 25', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-26', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_note', title: 'Title of card 26', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-27', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'Title of card 27', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      }
    ]
  },
  {
    _id: 'board-id-02',
    title: 'Realesate (B) T&N Lorem orem Ipsum 2',
    description: 'Realesate data description',
    type: 'public', // 'private'
    ownerIds: [], // Những users là Admin của board
    memberIds: [], // Những users là member bình thường của board
    columnOrderIds: ['column-id-01', 'column-id-02', 'column-id-03', 'column-id-04', 'column-id-05', 'column-id-06'], // Thứ tự sắp xếp / vị trí của các Columns trong 1 boards
    titleNumber: 1,
    emailsTotal: 3,
    docsTotal: 2,
    noteTotal: 4,
    span: 4,
    display: 'none',
    columns: [
      {
        _id: 'column-id-01',
        boardId: 'board-id-02',
        title: 'offer/em',
        cardOrderIds: ['card-id-01', 'card-id-06', 'card-id-03', 'card-id-04', 'card-id-05', 'card-id-02', 'card-id-07'],
        cards: [
          {
            _id: 'card-id-01',
            boardId: 'board-id-02',
            columnId: 'column-id-01',
            cardChildrenOrderIds: ['children-id-05', 'children-id-06', 'children-id-07', 'children-id-08'],
            childrens: [
              {
                _id: 'children-id-05',
                boardId: 'board-id-02',
                columnId: 'column-id-01',
                cardId: 'card-id-01',
                childrens: [],
                status: 'task_waiting',
                title: 'Title of children 05',
                description: null, cover: null,
                memberIds: [],
                comments: [],
                attachments: []
              },
              { _id: 'children-id-06', boardId: 'board-id-02', columnId: 'column-id-01', cardId: 'card-id-01', childrens: [], status: 'task_done', title: 'Title of children 06', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-07', boardId: 'board-id-02', columnId: 'column-id-01', cardId: 'card-id-01', childrens: [], status: 'task_waiting', title: 'Title of children 07', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-08', boardId: 'board-id-02', columnId: 'column-id-01', cardId: 'card-id-01', childrens: [], status: 'task_note', title: 'Title of children 08', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
            ],
            status: 'task_done',
            title: 'Title of card 01',
            description: 'Markdown Syntax (sẽ ở khóa nâng cao nhé)',
            cover: 'https://media.discordapp.net/attachments/975603557048930364/1136578893759918160/Hinh-nen-2021_61.jpg?width=885&height=531',
            memberIds: ['user-id-01'],
            comments: [
              {
                userId: 'user-id-01',
                comment: 'test comment 01'
              },
              {
                userId: 'user-id-02',
                comment: 'test comment 02'
              }
            ],
            attachments: ['test attachment 01', 'test attachment 02', 'test attachment 03']
          },
          { _id: 'card-id-02', boardId: 'board-id-02', columnId: 'column-id-01', childrens: [], status: 'task_done', title: 'Title of card Title of card Title of card Title of card Title of card 02', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-03', boardId: 'board-id-02', columnId: 'column-id-01', childrens: [], status: 'task_note', title: 'Title of card 03', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-04', boardId: 'board-id-02', columnId: 'column-id-01', childrens: [], status: 'task_done', title: 'Title of card 04', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-05', boardId: 'board-id-02', columnId: 'column-id-01', childrens: [], status: 'task_done', title: 'Title of card 05', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-06', boardId: 'board-id-02', columnId: 'column-id-01', childrens: [], status: 'task_done', title: 'Title of card 06', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-07', boardId: 'board-id-02', columnId: 'column-id-01', childrens: [], status: 'task_waiting', title: 'Title of card 07', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-02',
        boardId: 'board-id-02', 
        title: 'inspection',
        cardOrderIds: ['card-id-08', 'card-id-09', 'card-id-10'],
        cards: [
          { _id: 'card-id-08', boardId: 'board-id-02', columnId: 'column-id-02', childrens: [], status: 'task_done', title: 'Title of card 08', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-09', boardId: 'board-id-02', columnId: 'column-id-02', childrens: [], status: 'task_done', title: 'Title of card 09', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-10', boardId: 'board-id-02', columnId: 'column-id-02', childrens: [], status: 'task_waiting', title: 'Title of card 10', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-03',
        boardId: 'board-id-02',
        title: 'financing',
        cardOrderIds: ['card-id-11', 'card-id-12', 'card-id-13', 'card-id-14', 'card-id-15'],
        cards: [
          { _id: 'card-id-11', boardId: 'board-id-02', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'Title of card 11', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-12', boardId: 'board-id-02', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'Title of card 12', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-13', boardId: 'board-id-02', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'Title of card 13', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-14', boardId: 'board-id-02', columnId: 'column-id-03', childrens: [], status: 'task_waiting', title: 'Title of card 14', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-15', boardId: 'board-id-02', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'Title of card 15', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-04',
        boardId: 'board-id-02',
        title: 'title work',
        cardOrderIds: ['card-id-16', 'card-id-17', 'card-id-18'],
        cards: [
          { _id: 'card-id-16', boardId: 'board-id-02', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'Title of card 16', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-17', boardId: 'board-id-02', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'Title of card 17', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-18', boardId: 'board-id-02', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'Title of card 18', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-05',
        boardId: 'board-id-02',
        title: 'closing',
        cardOrderIds: ['card-id-19', 'card-id-20', 'card-id-21', 'card-id-22', 'card-id-23', 'card-id-24'],
        cards: [
          { _id: 'card-id-19', boardId: 'board-id-02', columnId: 'column-id-05', childrens: [], status: 'task_note', title: 'Title of card 19', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-20', boardId: 'board-id-02', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'Title of card 20', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-21', boardId: 'board-id-02', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'Title of card 21', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-22', boardId: 'board-id-02', columnId: 'column-id-05', childrens: [], status: 'task_waiting', title: 'Title of card 22', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-23', boardId: 'board-id-02', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'Title of card 23', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-24', boardId: 'board-id-02', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'Title of card 24', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-06',
        boardId: 'board-id-02',
        title: 'extras',
        cardOrderIds: ['card-id-25', 'card-id-26', 'card-id-27'],
        cards: [
          { _id: 'card-id-25', boardId: 'board-id-02', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'Title of card 25', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-26', boardId: 'board-id-02', columnId: 'column-id-06', childrens: [], status: 'task_note', title: 'Title of card 26', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-27', boardId: 'board-id-02', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'Title of card 27', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      }
    ]
  },
  {
    _id: 'board-id-03',
    title: 'Realesate (B) T&N Lorem orem Ipsum',
    description: 'Realesate data description',
    type: 'public', // 'private'
    ownerIds: [], // Những users là Admin của board
    memberIds: [], // Những users là member bình thường của board
    columnOrderIds: ['column-id-01', 'column-id-02', 'column-id-03', 'column-id-04', 'column-id-05', 'column-id-06'], // Thứ tự sắp xếp / vị trí của các Columns trong 1 boards
    titleNumber: 1,
    emailsTotal: 3,
    docsTotal: 2,
    noteTotal: 4,
    span: 4,
    display: 'none',
    columns: [
      {
        _id: 'column-id-01',
        boardId: 'board-id-03',
        title: 'offer/em',
        cardOrderIds: ['card-id-01', 'card-id-06', 'card-id-03', 'card-id-04', 'card-id-05', 'card-id-02', 'card-id-07'],
        cards: [
          {
            _id: 'card-id-01',
            boardId: 'board-id-03',
            columnId: 'column-id-01',
            cardChildrenOrderIds: ['children-id-09', 'children-id-10', 'children-id-11', 'children-id-12'],
            childrens: [
              {
                _id: 'children-id-09',
                boardId: 'board-id-03',
                columnId: 'column-id-01',
                cardId: 'card-id-01',
                childrens: [],
                status: 'task_waiting',
                title: 'Title of children 09',
                description: null, cover: null,
                memberIds: [],
                comments: [],
                attachments: []
              },
              { _id: 'children-id-10', boardId: 'board-id-03', columnId: 'column-id-01', cardId: 'card-id-01', childrens: [], status: 'task_done', title: 'Title of children 10', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-11', boardId: 'board-id-03', columnId: 'column-id-01', cardId: 'card-id-01', childrens: [], status: 'task_waiting', title: 'Title of children 11', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-12', boardId: 'board-id-03', columnId: 'column-id-01', cardId: 'card-id-01', childrens: [], status: 'task_note', title: 'Title of children 12', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
            ],
            status: 'task_done',
            title: 'Title of card 01',
            description: 'Markdown Syntax (sẽ ở khóa nâng cao nhé)',
            cover: 'https://media.discordapp.net/attachments/975603557048930364/1136578893759918160/Hinh-nen-2021_61.jpg?width=885&height=531',
            memberIds: ['user-id-01'],
            comments: ['test comment 01', 'test comment 02'],
            attachments: ['test attachment 01', 'test attachment 02', 'test attachment 03']
          },
          { _id: 'card-id-02', boardId: 'board-id-03', columnId: 'column-id-01', childrens: [], status: 'task_done', title: 'Title of card Title of card Title of card Title of card Title of card 02', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-03', boardId: 'board-id-03', columnId: 'column-id-01', childrens: [], status: 'task_note', title: 'Title of card 03', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-04', boardId: 'board-id-03', columnId: 'column-id-01', childrens: [], status: 'task_done', title: 'Title of card 04', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-05', boardId: 'board-id-03', columnId: 'column-id-01', childrens: [], status: 'task_done', title: 'Title of card 05', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-06', boardId: 'board-id-03', columnId: 'column-id-01', childrens: [], status: 'task_done', title: 'Title of card 06', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-07', boardId: 'board-id-03', columnId: 'column-id-01', childrens: [], status: 'task_waiting', title: 'Title of card 07', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-02',
        boardId: 'board-id-03',
        title: 'inspection',
        cardOrderIds: ['card-id-08', 'card-id-09', 'card-id-10'],
        cards: [
          { _id: 'card-id-08', boardId: 'board-id-03', columnId: 'column-id-02', childrens: [], status: 'task_done', title: 'Title of card 08', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-09', boardId: 'board-id-03', columnId: 'column-id-02', childrens: [], status: 'task_done', title: 'Title of card 09', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-10', boardId: 'board-id-03', columnId: 'column-id-02', childrens: [], status: 'task_waiting', title: 'Title of card 10', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-03',
        boardId: 'board-id-03',
        title: 'financing',
        cardOrderIds: ['card-id-11', 'card-id-12', 'card-id-13', 'card-id-14', 'card-id-15'],
        cards: [
          { _id: 'card-id-11', boardId: 'board-id-03', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'Title of card 11', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-12', boardId: 'board-id-03', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'Title of card 12', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-13', boardId: 'board-id-03', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'Title of card 13', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-14', boardId: 'board-id-03', columnId: 'column-id-03', childrens: [], status: 'task_waiting', title: 'Title of card 14', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-15', boardId: 'board-id-03', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'Title of card 15', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-04',
        boardId: 'board-id-03',
        title: 'title work',
        cardOrderIds: ['card-id-16', 'card-id-17', 'card-id-18'],
        cards: [
          { _id: 'card-id-16', boardId: 'board-id-03', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'Title of card 16', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-17', boardId: 'board-id-03', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'Title of card 17', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-18', boardId: 'board-id-03', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'Title of card 18', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-05',
        boardId: 'board-id-03',
        title: 'closing',
        cardOrderIds: ['card-id-19', 'card-id-20', 'card-id-21', 'card-id-22', 'card-id-23', 'card-id-24'],
        cards: [
          { _id: 'card-id-19', boardId: 'board-id-03', columnId: 'column-id-05', childrens: [], status: 'task_note', title: 'Title of card 19', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-20', boardId: 'board-id-03', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'Title of card 20', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-21', boardId: 'board-id-03', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'Title of card 21', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-22', boardId: 'board-id-03', columnId: 'column-id-05', childrens: [], status: 'task_waiting', title: 'Title of card 22', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-23', boardId: 'board-id-03', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'Title of card 23', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-24', boardId: 'board-id-03', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'Title of card 24', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-06',
        boardId: 'board-id-03',
        title: 'extras',
        cardOrderIds: ['card-id-25', 'card-id-26', 'card-id-27'],
        cards: [
          { _id: 'card-id-25', boardId: 'board-id-03', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'Title of card 25', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-26', boardId: 'board-id-03', columnId: 'column-id-06', childrens: [], status: 'task_note', title: 'Title of card 26', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-27', boardId: 'board-id-03', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'Title of card 27', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      }
    ]
  },
  {
    _id: 'board-id-04',
    title: 'Realesate (B) T&N Lorem orem Ipsum',
    description: 'Realesate data description',
    type: 'public', // 'private'
    ownerIds: [], // Những users là Admin của board
    memberIds: [], // Những users là member bình thường của board
    columnOrderIds: ['column-id-01', 'column-id-02', 'column-id-03', 'column-id-04', 'column-id-05', 'column-id-06'], // Thứ tự sắp xếp / vị trí của các Columns trong 1 boards
    titleNumber: 1,
    emailsTotal: 3,
    docsTotal: 2,
    noteTotal: 4,
    span: 4,
    display: 'none',
    columns: [
      {
        _id: 'column-id-01',
        boardId: 'board-id-04',
        title: 'offer/em',
        cardOrderIds: ['card-id-01', 'card-id-06', 'card-id-03', 'card-id-04', 'card-id-05', 'card-id-02', 'card-id-07'],
        cards: [
          {
            _id: 'card-id-01',
            boardId: 'board-id-04',
            columnId: 'column-id-01',
            cardChildrenOrderIds: ['children-id-13', 'children-id-14', 'children-id-15', 'children-id-16'],
            childrens: [
              {
                _id: 'children-id-13',
                boardId: 'board-id-04',
                columnId: 'column-id-01',
                cardId: 'card-id-01',
                childrens: [],
                status: 'task_waiting',
                title: 'Title of children 13',
                description: null, cover: null,
                memberIds: [],
                comments: [],
                attachments: []
              },
              { _id: 'children-id-14', boardId: 'board-id-04', columnId: 'column-id-01', cardId: 'card-id-01', childrens: [], status: 'task_done', title: 'Title of children 14', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-15', boardId: 'board-id-04', columnId: 'column-id-01', cardId: 'card-id-01', childrens: [], status: 'task_waiting', title: 'Title of children 15', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-16', boardId: 'board-id-04', columnId: 'column-id-01', cardId: 'card-id-01', childrens: [], status: 'task_note', title: 'Title of children 16', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
            ],
            status: 'task_done',
            title: 'Title of card 01',
            description: 'Markdown Syntax (sẽ ở khóa nâng cao nhé)',
            cover: 'https://media.discordapp.net/attachments/975603557048930364/1136578893759918160/Hinh-nen-2021_61.jpg?width=885&height=531',
            memberIds: ['user-id-01'],
            comments: ['test comment 01', 'test comment 02'],
            attachments: ['test attachment 01', 'test attachment 02', 'test attachment 03']
          },
          { _id: 'card-id-02', boardId: 'board-id-04', columnId: 'column-id-01', childrens: [], status: 'task_done', title: 'Title of card Title of card Title of card Title of card Title of card 02', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-03', boardId: 'board-id-04', columnId: 'column-id-01', childrens: [], status: 'task_note', title: 'Title of card 03', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-04', boardId: 'board-id-04', columnId: 'column-id-01', childrens: [], status: 'task_done', title: 'Title of card 04', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-05', boardId: 'board-id-04', columnId: 'column-id-01', childrens: [], status: 'task_done', title: 'Title of card 05', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-06', boardId: 'board-id-04', columnId: 'column-id-01', childrens: [], status: 'task_done', title: 'Title of card 06', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-07', boardId: 'board-id-04', columnId: 'column-id-01', childrens: [], status: 'task_waiting', title: 'Title of card 07', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-02',
        boardId: 'board-id-04',
        title: 'inspection',
        cardOrderIds: ['card-id-08', 'card-id-09', 'card-id-10'],
        cards: [
          { _id: 'card-id-08', boardId: 'board-id-04', columnId: 'column-id-02', childrens: [], status: 'task_done', title: 'Title of card 08', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-09', boardId: 'board-id-04', columnId: 'column-id-02', childrens: [], status: 'task_done', title: 'Title of card 09', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-10', boardId: 'board-id-04', columnId: 'column-id-02', childrens: [], status: 'task_waiting', title: 'Title of card 10', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-03',
        boardId: 'board-id-04',
        title: 'financing',
        cardOrderIds: ['card-id-11', 'card-id-12', 'card-id-13', 'card-id-14', 'card-id-15'],
        cards: [
          { _id: 'card-id-11', boardId: 'board-id-04', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'Title of card 11', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-12', boardId: 'board-id-04', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'Title of card 12', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-13', boardId: 'board-id-04', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'Title of card 13', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-14', boardId: 'board-id-04', columnId: 'column-id-03', childrens: [], status: 'task_waiting', title: 'Title of card 14', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-15', boardId: 'board-id-04', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'Title of card 15', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-04',
        boardId: 'board-id-04',
        title: 'title work',
        cardOrderIds: ['card-id-16', 'card-id-17', 'card-id-18'],
        cards: [
          { _id: 'card-id-16', boardId: 'board-id-04', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'Title of card 16', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-17', boardId: 'board-id-04', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'Title of card 17', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-18', boardId: 'board-id-04', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'Title of card 18', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-05',
        boardId: 'board-id-04',
        title: 'closing',
        cardOrderIds: ['card-id-19', 'card-id-20', 'card-id-21', 'card-id-22', 'card-id-23', 'card-id-24'],
        cards: [
          { _id: 'card-id-19', boardId: 'board-id-04', columnId: 'column-id-05', childrens: [], status: 'task_note', title: 'Title of card 19', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-20', boardId: 'board-id-04', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'Title of card 20', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-21', boardId: 'board-id-04', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'Title of card 21', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-22', boardId: 'board-id-04', columnId: 'column-id-05', childrens: [], status: 'task_waiting', title: 'Title of card 22', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-23', boardId: 'board-id-04', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'Title of card 23', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-24', boardId: 'board-id-04', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'Title of card 24', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-06',
        boardId: 'board-id-04',
        title: 'extras',
        cardOrderIds: ['card-id-25', 'card-id-26', 'card-id-27'],
        cards: [
          { _id: 'card-id-25', boardId: 'board-id-04', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'Title of card 25', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-26', boardId: 'board-id-04', columnId: 'column-id-06', childrens: [], status: 'task_note', title: 'Title of card 26', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-27', boardId: 'board-id-04', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'Title of card 27', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      }
    ]
  },
  {
    _id: 'board-id-05',
    title: 'Realesate (B) T&N Lorem orem Ipsum',
    description: 'Realesate data description',
    type: 'public', // 'private'
    ownerIds: [], // Những users là Admin của board
    memberIds: [], // Những users là member bình thường của board
    columnOrderIds: ['column-id-01', 'column-id-02', 'column-id-03', 'column-id-04', 'column-id-05', 'column-id-06'], // Thứ tự sắp xếp / vị trí của các Columns trong 1 boards
    titleNumber: 1,
    emailsTotal: 3,
    docsTotal: 2,
    noteTotal: 4,
    span: 4,
    display: 'none',
    columns: [
      {
        _id: 'column-id-01',
        boardId: 'board-id-05',
        title: 'offer/em',
        cardOrderIds: ['card-id-01', 'card-id-06', 'card-id-03', 'card-id-04', 'card-id-05', 'card-id-02', 'card-id-07'],
        cards: [
          {
            _id: 'card-id-01',
            boardId: 'board-id-05',
            columnId: 'column-id-01',
            cardChildrenOrderIds: ['children-id-17', 'children-id-18', 'children-id-19', 'children-id-20'],
            childrens: [
              {
                _id: 'children-id-17',
                boardId: 'board-id-05',
                columnId: 'column-id-01',
                cardId: 'card-id-01',
                childrens: [],
                status: 'task_waiting',
                title: 'Title of children 17',
                description: null,
                cover: null,
                memberIds: [],
                comments: [],
                attachments: []
              },
              { _id: 'children-id-18', boardId: 'board-id-05', columnId: 'column-id-01', cardId: 'card-id-01', childrens: [], status: 'task_done', title: 'Title of children 18', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-19', boardId: 'board-id-05', columnId: 'column-id-01', cardId: 'card-id-01', childrens: [], status: 'task_waiting', title: 'Title of children 19', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-20', boardId: 'board-id-05', columnId: 'column-id-01', cardId: 'card-id-01', childrens: [], status: 'task_note', title: 'Title of children 20', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
            ],
            status: 'task_done',
            title: 'Title of card 01',
            description: 'Markdown Syntax (sẽ ở khóa nâng cao nhé)',
            cover: 'https://media.discordapp.net/attachments/975603557048930364/1136578893759918160/Hinh-nen-2021_61.jpg?width=885&height=531',
            memberIds: ['user-id-01'],
            comments: ['test comment 01', 'test comment 02'],
            attachments: ['test attachment 01', 'test attachment 02', 'test attachment 03']
          },
          { _id: 'card-id-02', boardId: 'board-id-05', columnId: 'column-id-01', childrens: [], status: 'task_done', title: 'Title of card Title of card Title of card Title of card Title of card 02', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-03', boardId: 'board-id-05', columnId: 'column-id-01', childrens: [], status: 'task_note', title: 'Title of card 03', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-04', boardId: 'board-id-05', columnId: 'column-id-01', childrens: [], status: 'task_done', title: 'Title of card 04', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-05', boardId: 'board-id-05', columnId: 'column-id-01', childrens: [], status: 'task_done', title: 'Title of card 05', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-06', boardId: 'board-id-05', columnId: 'column-id-01', childrens: [], status: 'task_done', title: 'Title of card 06', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-07', boardId: 'board-id-05', columnId: 'column-id-01', childrens: [], status: 'task_waiting', title: 'Title of card 07', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-02',
        boardId: 'board-id-05',
        title: 'inspection',
        cardOrderIds: ['card-id-08', 'card-id-09', 'card-id-10'],
        cards: [
          { _id: 'card-id-08', boardId: 'board-id-05', columnId: 'column-id-02', childrens: [], status: 'task_done', title: 'Title of card 08', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-09', boardId: 'board-id-05', columnId: 'column-id-02', childrens: [], status: 'task_done', title: 'Title of card 09', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-10', boardId: 'board-id-05', columnId: 'column-id-02', childrens: [], status: 'task_waiting', title: 'Title of card 10', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-03',
        boardId: 'board-id-05',
        title: 'financing',
        cardOrderIds: ['card-id-11', 'card-id-12', 'card-id-13', 'card-id-14', 'card-id-15'],
        cards: [
          { _id: 'card-id-11', boardId: 'board-id-05', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'Title of card 11', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-12', boardId: 'board-id-05', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'Title of card 12', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-13', boardId: 'board-id-05', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'Title of card 13', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-14', boardId: 'board-id-05', columnId: 'column-id-03', childrens: [], status: 'task_waiting', title: 'Title of card 14', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-15', boardId: 'board-id-05', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'Title of card 15', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-04',
        boardId: 'board-id-05',
        title: 'title work',
        cardOrderIds: ['card-id-16', 'card-id-17', 'card-id-18'],
        cards: [
          { _id: 'card-id-16', boardId: 'board-id-05', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'Title of card 16', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-17', boardId: 'board-id-05', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'Title of card 17', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-18', boardId: 'board-id-05', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'Title of card 18', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-05',
        boardId: 'board-id-05',
        title: 'closing',
        cardOrderIds: ['card-id-19', 'card-id-20', 'card-id-21', 'card-id-22', 'card-id-23', 'card-id-24'],
        cards: [
          { _id: 'card-id-19', boardId: 'board-id-05', columnId: 'column-id-05', childrens: [], status: 'task_note', title: 'Title of card 19', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-20', boardId: 'board-id-05', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'Title of card 20', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-21', boardId: 'board-id-05', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'Title of card 21', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-22', boardId: 'board-id-05', columnId: 'column-id-05', childrens: [], status: 'task_waiting', title: 'Title of card 22', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-23', boardId: 'board-id-05', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'Title of card 23', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-24', boardId: 'board-id-05', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'Title of card 24', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-06',
        boardId: 'board-id-05',
        title: 'extras',
        cardOrderIds: ['card-id-25', 'card-id-26', 'card-id-27'],
        cards: [
          { _id: 'card-id-25', boardId: 'board-id-05', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'Title of card 25', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-26', boardId: 'board-id-05', columnId: 'column-id-06', childrens: [], status: 'task_note', title: 'Title of card 26', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-27', boardId: 'board-id-05', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'Title of card 27', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      }
    ]
  },
  {
    _id: 'board-id-06',
    title: 'Realesate (B) T&N Lorem orem Ipsum',
    description: 'Realesate data description',
    type: 'public', // 'private'
    ownerIds: [], // Những users là Admin của board
    memberIds: [], // Những users là member bình thường của board
    columnOrderIds: ['column-id-01', 'column-id-02', 'column-id-03', 'column-id-04', 'column-id-05', 'column-id-06'], // Thứ tự sắp xếp / vị trí của các Columns trong 1 boards
    titleNumber: 1,
    emailsTotal: 3,
    docsTotal: 2,
    noteTotal: 4,
    span: 4,
    display: 'none',
    columns: [
      {
        _id: 'column-id-01',
        boardId: 'board-id-06',
        title: 'offer/em',
        cardOrderIds: ['card-id-01', 'card-id-06', 'card-id-03', 'card-id-04', 'card-id-05', 'card-id-02', 'card-id-07'],
        cards: [
          {
            _id: 'card-id-01',
            boardId: 'board-id-06',
            columnId: 'column-id-01',
            cardChildrenOrderIds: ['children-id-21', 'children-id-22', 'children-id-23', 'children-id-24'],
            childrens: [],
            status: 'task_done',
            title: 'Title of card 01',
            description: 'Markdown Syntax (sẽ ở khóa nâng cao nhé)',
            cover: 'https://media.discordapp.net/attachments/975603557048930364/1136578893759918160/Hinh-nen-2021_61.jpg?width=885&height=531',
            memberIds: ['user-id-01'],
            comments: ['test comment 01', 'test comment 02'],
            attachments: ['test attachment 01', 'test attachment 02', 'test attachment 03']
          },
          { _id: 'card-id-02', boardId: 'board-id-06', columnId: 'column-id-01', childrens: [], status: 'task_done', title: 'Title of card Title of card Title of card Title of card Title of card 02', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-03', boardId: 'board-id-06', columnId: 'column-id-01', childrens: [], status: 'task_note', title: 'Title of card 03', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-04', boardId: 'board-id-06', columnId: 'column-id-01', childrens: [], status: 'task_done', title: 'Title of card 04', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-05', boardId: 'board-id-06', columnId: 'column-id-01', childrens: [], status: 'task_done', title: 'Title of card 05', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-06', boardId: 'board-id-06', columnId: 'column-id-01', childrens: [], status: 'task_done', title: 'Title of card 06', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-07', boardId: 'board-id-06', columnId: 'column-id-01', childrens: [], status: 'task_waiting', title: 'Title of card 07', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-02',
        boardId: 'board-id-06',
        title: 'inspection',
        cardOrderIds: ['card-id-08', 'card-id-09', 'card-id-10'],
        cards: [
          { _id: 'card-id-08', boardId: 'board-id-06', columnId: 'column-id-02', cardChildrenOrderIds: ['children-id-21', 'children-id-22', 'children-id-23', 'children-id-24'],
            childrens: [
              {
                _id: 'children-id-21',
                boardId: 'board-id-06',
                columnId: 'column-id-02',
                cardId: 'card-id-01',
                childrens: [],
                status: 'task_waiting',
                title: 'Title of children 21',
                description: null, cover: null,
                memberIds: [],
                comments: [],
                attachments: []
              },
              { _id: 'children-id-22', boardId: 'board-id-06', columnId: 'column-id-02', cardId: 'card-id-01', childrens: [], status: 'task_done', title: 'Title of children 22', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-23', boardId: 'board-id-06', columnId: 'column-id-02', cardId: 'card-id-01', childrens: [], status: 'task_waiting', title: 'Title of children 23', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-24', boardId: 'board-id-06', columnId: 'column-id-02', cardId: 'card-id-01', childrens: [], status: 'task_note', title: 'Title of children 24', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
            ],
            status: 'task_done', title: 'Title of card 08', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-09', boardId: 'board-id-06', columnId: 'column-id-02', childrens: [], status: 'task_done', title: 'Title of card 09', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-10', boardId: 'board-id-06', columnId: 'column-id-02', childrens: [], status: 'task_waiting', title: 'Title of card 10', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-03',
        boardId: 'board-id-06',
        title: 'financing',
        cardOrderIds: ['card-id-11', 'card-id-12', 'card-id-13', 'card-id-14', 'card-id-15'],
        cards: [
          { _id: 'card-id-11', boardId: 'board-id-06', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'Title of card 11', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-12', boardId: 'board-id-06', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'Title of card 12', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-13', boardId: 'board-id-06', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'Title of card 13', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-14', boardId: 'board-id-06', columnId: 'column-id-03', childrens: [], status: 'task_waiting', title: 'Title of card 14', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-15', boardId: 'board-id-06', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'Title of card 15', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-04',
        boardId: 'board-id-06',
        title: 'title work',
        cardOrderIds: ['card-id-16', 'card-id-17', 'card-id-18'],
        cards: [
          { _id: 'card-id-16', boardId: 'board-id-06', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'Title of card 16', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-17', boardId: 'board-id-06', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'Title of card 17', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-18', boardId: 'board-id-06', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'Title of card 18', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-05',
        boardId: 'board-id-06',
        title: 'closing',
        cardOrderIds: ['card-id-19', 'card-id-20', 'card-id-21', 'card-id-22', 'card-id-23', 'card-id-24'],
        cards: [
          { _id: 'card-id-19', boardId: 'board-id-06', columnId: 'column-id-05', childrens: [], status: 'task_note', title: 'Title of card 19', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-20', boardId: 'board-id-06', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'Title of card 20', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-21', boardId: 'board-id-06', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'Title of card 21', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-22', boardId: 'board-id-06', columnId: 'column-id-05', childrens: [], status: 'task_waiting', title: 'Title of card 22', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-23', boardId: 'board-id-06', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'Title of card 23', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-24', boardId: 'board-id-06', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'Title of card 24', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-06',
        boardId: 'board-id-06',
        title: 'extras',
        cardOrderIds: ['card-id-25', 'card-id-26', 'card-id-27'],
        cards: [
          { _id: 'card-id-25', boardId: 'board-id-06', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'Title of card 25', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-26', boardId: 'board-id-06', columnId: 'column-id-06', childrens: [], status: 'task_note', title: 'Title of card 26', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-27', boardId: 'board-id-06', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'Title of card 27', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      }
    ]
  }
  ],
  user: [
    {
      _id: 'user-id-01',
      name: 'user 1',
      role: 'admin'
    },
    {
      _id: 'user-id-02',
      name: 'user 2',
      role: 'admin'
    },
    {
      _id: 'user-id-03',
      name: 'user 3',
      role: 'admin'
    },
    {
      _id: 'user-id-04',
      name: 'user 4',
      role: 'admin'
    },
    {
      _id: 'user-id-05',
      name: 'user 5',
      role: 'admin'
    },
    {
      _id: 'user-id-06',
      name: 'user 6',
      role: 'admin'
    },
    {
      _id: 'user-id-07',
      name: 'user 7',
      role: 'admin'
    },
    {
      _id: 'user-id-08',
      name: 'user 8',
      role: 'admin'
    },
    {
      _id: 'user-id-09',
      name: 'user 9',
      role: 'admin'
    },
  ]
}