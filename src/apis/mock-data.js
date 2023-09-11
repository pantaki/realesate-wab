/**
 * Data Realesate
 * Created by taki
 */
export const mockData = {

  tasks:[{
    _id: 'board-id-01',
    title: 'Realesate (B) T&N Lorem orem Ipsum 1',
    description: 'Realesate data description',
    type: 'public', // 'private'
    ownerIds: [], // Những users là Admin của task
    memberIds: [], // Những users là member bình thường của task
    columnOrderIds: ['column-id-01', 'column-id-02', 'column-id-03', 'column-id-04', 'column-id-05', 'column-id-06'], // Thứ tự sắp xếp / vị trí của các Columns trong 1 boards
    lastColumnCardId: 'card-id-101',
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
        title: 'PRE-OFFER',
        cardOrderIds: ['card-id-01', 'card-id-02', 'card-id-03', 'card-id-04', 'card-id-05',
          'card-id-06', 'card-id-07', 'card-id-08', 'card-id-09', 'card-id-10',
          'card-id-11', 'card-id-12', 'card-id-13', 'card-id-14', 'card-id-15'],
        cardLastId: 'card-id-15',
        cards: [
          {
            _id: 'card-id-01',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            cardChildrenOrderIds: [],
            childrens: [],
            status: 'task_waiting',
            title: "CLEIA Buyer Intro Call (follow MFO buyer's script)",
            description: "Buyer Intro Call (follow MFO buyer's script)",
            cover: '',
            memberIds: ['user-id-01'],
            commentsLastId: 'comment-id-01',
            comments: [
              {
                _id: 'comment-id-01',
                userId: 'user-id-01',
                userName: 'Ben',
                comment : 'Remember to take the key for the house',
                date: 'Aug. 24 ,2023 8:30 Am'
              }
            ],
            attachments: []

          },
          { _id: 'card-id-02', boardId: 'board-id-01', columnId: 'column-id-01', cardChildrenOrderIds: [], childrens: [], status: 'task_done', title: "CLEIA During call, get buyer's contact info", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-03', boardId: 'board-id-01', columnId: 'column-id-01', cardChildrenOrderIds: [], childrens: [], status: 'task_note', title: "ADMIN Add buyer's contact info to KW Command", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-04', boardId: 'board-id-01', columnId: 'column-id-01', cardChildrenOrderIds: [], childrens: [], status: 'task_done', title: "CLEIA Send buyer to lender for pre-approval", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-05', boardId: 'board-id-01', columnId: 'column-id-01', cardChildrenOrderIds: [], childrens: [], status: 'task_done', title: "CLEIA Receive lender pre-approval [GMAIL]", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-06', boardId: 'board-id-01', columnId: 'column-id-01', cardChildrenOrderIds: [], childrens: [], status: 'task_done', title: "ADMIN Create an opportunity in KW Command: (B) LAST NAME - Househunting", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-07', boardId: 'board-id-01', columnId: 'column-id-01', cardChildrenOrderIds: [], childrens: [], status: 'task_waiting', title: "ADMIN In opportunity select Documents > Start a Transaction > DocuSign", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-08', boardId: 'board-id-01', columnId: 'column-id-01', cardChildrenOrderIds: [], childrens: [], status: 'task_waiting', title: "ADMIN Go into DocuSign Room, upload buyer's pre-approval", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-09', boardId: 'board-id-01', columnId: 'column-id-01', cardChildrenOrderIds: [], childrens: [], status: 'task_waiting', title: "CLEIA call buyer, congratulate on pre-approval, schedule buyer consultation", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-10', boardId: 'board-id-01', columnId: 'column-id-01',
            cardChildrenOrderIds: ['children-id-05', 'children-id-06', 'children-id-07', 'children-id-08', 'children-id-09', 'children-id-10'],
            childrens: [
              {
                _id: 'children-id-05',
                boardId: 'board-id-01',
                columnId: 'column-id-01',
                cardId: 'card-id-10',
                childrens: [],
                status: 'task_waiting',
                title: "Review BAA (buyer's agency agreement)",
                description: null, cover: null,
                memberIds: [],
                comments: [],
                attachments: []
              },
              { _id: 'children-id-06', boardId: 'board-id-01', columnId: 'column-id-01', cardId: 'card-id-10', childrens: [], status: 'task_done', title: "Review Title Alliance ABA (associated business agreement)", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-07', boardId: 'board-id-01', columnId: 'column-id-01', cardId: 'card-id-10', childrens: [], status: 'task_waiting', title: "Review KW (Keller Williams) office policy", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-08', boardId: 'board-id-01', columnId: 'column-id-01', cardId: 'card-id-10', childrens: [], status: 'task_note', title: "Review PA (purchase agreement)", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-09', boardId: 'board-id-01', columnId: 'column-id-01', cardId: 'card-id-10', childrens: [], status: 'task_note', title: "Review TPG (Tupper Property Group) buyer brochure", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-10', boardId: 'board-id-01', columnId: 'column-id-01', cardId: 'card-id-10', childrens: [], status: 'task_note', title: "Complete MFO script: Qualifying for Home and Motivation", description: null, cover: null, memberIds: [], comments: [], attachments: [] }
            ],
            status: 'task_waiting', title: "CLEIA Buyer consultation meeting [GCAL]", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-11', boardId: 'board-id-01', columnId: 'column-id-01', cardChildrenOrderIds: [], childrens: [], status: 'task_waiting', title: "CLEIA send docs for buyer to e-sign [DOCUSIGN]", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-12', boardId: 'board-id-01', columnId: 'column-id-01', cardChildrenOrderIds: [], childrens: [], status: 'task_waiting', title: "CLEIA Offer buyer 2 appointment times to view homes", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-13', boardId: 'board-id-01', columnId: 'column-id-01', cardChildrenOrderIds: [], childrens: [], status: 'task_waiting', title: "ADMIN Schedule showings in Broker Bay at time that works for Cleia and buyer", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-14', boardId: 'board-id-01', columnId: 'column-id-01', cardChildrenOrderIds: [], childrens: [], status: 'task_waiting', title: 'ADMIN Add appointment to calendar "Ben/Cleia show homes to buyers name" [GCAL]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-15', boardId: 'board-id-01', columnId: 'column-id-01',
            cardChildrenOrderIds: ['children-id-11', 'children-id-12', 'children-id-13'],
            childrens: [
              {
                _id: 'children-id-11',
                boardId: 'board-id-01',
                columnId: 'column-id-01',
                cardId: 'card-id-15',
                childrens: [],
                status: 'task_waiting',
                title: "Put BLC sheets in showing order of the scheduled appointments",
                description: null, cover: null,
                memberIds: [],
                comments: [],
                attachments: []
              },
              { _id: 'children-id-12', boardId: 'board-id-01', columnId: 'column-id-01', cardId: 'card-id-15', childrens: [], status: 'task_done', title: "Write showing start / end time, lockbox code, alarm code (if applicable) on agent BLC sheets", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-13', boardId: 'board-id-01', columnId: 'column-id-01', cardId: 'card-id-15', childrens: [], status: 'task_done', title: "Write nothing on buyer BLC sheets", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
            ],
            status: 'task_done', title: "ADMIN print 2 copies of each BLC sheet (Print > Legacy Agent Full)", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
        ]
      },
      {
        _id: 'column-id-02',
        boardId: 'board-id-01',
        title: 'OFFER/EM',
        cardOrderIds: [
          'card-id-16', 'card-id-17', 'card-id-18', 'card-id-19', 'card-id-20',
          'card-id-21', 'card-id-22', 'card-id-23', 'card-id-24', 'card-id-25',
          'card-id-26', 'card-id-27', 'card-id-28', 'card-id-29', 'card-id-30',
          'card-id-31', 'card-id-32', 'card-id-33', 'card-id-34', 'card-id-35'
        ],
        cardLastId: 'card-id-35',
        cards: [
          { _id: 'card-id-16', boardId: 'board-id-01', columnId: 'column-id-02', cardChildrenOrderIds: [], childrens: [], status: 'task_done', title: "CLEIA Call agent before writing PA (see if other offers, motivation, etc.)", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-17', boardId: 'board-id-01', columnId: 'column-id-02', cardChildrenOrderIds: [], childrens: [], status: 'task_done', title: "CLEIA Write offer and all necessary docs [DOCUSIGN]", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-18', boardId: 'board-id-01', columnId: 'column-id-02', cardChildrenOrderIds: [], childrens: [], status: 'task_waiting', title: "CLEIA Send buyer all docs for signatures (PA, BLC sheet, Tax sheet, Disclosures) [DOCUSIGN]", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-19', boardId: 'board-id-01', columnId: 'column-id-02', cardChildrenOrderIds: [], childrens: [], status: 'task_done', title: "CLEIA Share signed docs AND financing docs with listing agent [DOCUSIGN]", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-20', boardId: 'board-id-01', columnId: 'column-id-02', cardChildrenOrderIds: [], childrens: [], status: 'task_done', title: "CLEIA Call, text or email to confirm LA (listing agent) received offer and docs", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-21', boardId: 'board-id-01', columnId: 'column-id-02', cardChildrenOrderIds: [], childrens: [], status: 'task_done', title: "CLEIA Receive / Review listing agent response to our offer", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-23', boardId: 'board-id-01', columnId: 'column-id-02', cardChildrenOrderIds: [], childrens: [], status: 'task_done', title: "CLEIA Counter offer (if applicable) until acceptance [DOCUSIGN]", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-24', boardId: 'board-id-01', columnId: 'column-id-02', cardChildrenOrderIds: [], childrens: [], status: 'task_waiting', title: "ADMIN note date offer accepted [GOOGLE CAL] and add price here $amount", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-25', boardId: 'board-id-01', columnId: 'column-id-02', cardChildrenOrderIds: [], childrens: [], status: 'task_done', title: "CLEIA Add pending deal to MFO (Mike Ferry Organization) Numbers Analyzer", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-26', boardId: 'board-id-01', columnId: 'column-id-02', cardChildrenOrderIds: [], childrens: [], status: 'task_done', title: "ADMIN Check BLC to see if property pending with Ben Tupper (38958) as selling agent", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-27', boardId: 'board-id-01', columnId: 'column-id-02', cardChildrenOrderIds: [], childrens: [], status: 'task_done', title: "ADMIN Create UNDER CONTRACT flyer and upload to Mailchimp / FB / Instagram", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-28', boardId: 'board-id-01', columnId: 'column-id-02', cardChildrenOrderIds: ['children-id-01-02', 'children-id-02-02'],
            childrens: [
              { _id: 'children-id-01-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-28', childrens: [], status: 'task_done', title: "Request HOA (Home Owners Association) rules (if applicable)", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-02-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-28', childrens: [], status: 'task_done', title: "Request EM (earnest money) instructions (if applicable, if listing side will hold EM)", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
            ],
            status: 'task_done', title: "ADMIN Send LA (listing agent) Next Steps email [GMAIL] *we really need a template for this email", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-29', boardId: 'board-id-01', columnId: 'column-id-02', cardChildrenOrderIds: ['children-id-03-02', 'children-id-04-02', 'children-id-05-02'],
            childrens: [
              { _id: 'children-id-03-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-29', childrens: [], status: 'task_done', title: "Include EM instructions $amount ", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-04-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-29', childrens: [], status: 'task_done', title: "Include Inspector recommendations ", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-05-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-29', childrens: [], status: 'task_done', title: "Note when BIR (buyer's inspection response) is due  ", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
            ],
            status: 'task_done', title: "ADMIN Send BUYER(s) Next Steps email [GMAIL] *we really need a template for this email", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-30', boardId: 'board-id-01', columnId: 'column-id-02',
            cardChildrenOrderIds: [
              'children-id-06-02', 'children-id-07-02', 'children-id-08-02', 'children-id-09-02', 'children-id-10-02',
              'children-id-11-02', 'children-id-12-02', 'children-id-13-02', 'children-id-14-02', 'children-id-15-02', 'children-id-16-02'],
            childrens: [
              { _id: 'children-id-06-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-30', childrens: [], status: 'task_done', title: "PA", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-07-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-30', childrens: [], status: 'task_done', title: "Counters (if applicable)", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-08-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-30', childrens: [], status: 'task_done', title: "Addendums (if applicable)", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-09-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-30', childrens: [], status: 'task_done', title: "BLC Sheet", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-10-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-30', childrens: [], status: 'task_done', title: "Tax Sheet", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-11-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-30', childrens: [], status: 'task_done', title: "SD (w/ buyer(s) and seller(s) signatures", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-12-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-30', childrens: [], status: 'task_done', title: "LBPD (if applicable)", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-13-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-30', childrens: [], status: 'task_done', title: "P.O.F. / Pre-Approval", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-14-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-30', childrens: [], status: 'task_done', title: "Warranty Invoice (not application or waiver)", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-15-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-30', childrens: [], status: 'task_done', title: "Title Alliance ABA", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-16-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-30', childrens: [], status: 'task_done', title: "BAA (with $300 doc storage fee to KW)", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
            ],
            status: 'task_done', title: "ADMIN Share these docs with title company contact [DOCUSIGN]", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-31', boardId: 'board-id-01', columnId: 'column-id-02',
            cardChildrenOrderIds: [
              'children-id-17-02', 'children-id-18-02', 'children-id-19-02', 'children-id-20-02', 'children-id-21-02',
              'children-id-22-02', 'children-id-23-02', 'children-id-24-02', 'children-id-25-02', 'children-id-26-02', 'children-id-27-02'],
            childrens: [
              { _id: 'children-id-17-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-31', childrens: [], status: 'task_done', title: "PA", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-18-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-31', childrens: [], status: 'task_done', title: "Counters (if applicable)", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-19-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-31', childrens: [], status: 'task_done', title: "Addendums (if applicable)", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-20-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-31', childrens: [], status: 'task_done', title: "BLC Sheet", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-21-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-31', childrens: [], status: 'task_done', title: "Tax Sheet", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-22-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-31', childrens: [], status: 'task_done', title: "SD (w/ buyer(s) and seller(s) signatures", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-23-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-31', childrens: [], status: 'task_done', title: "LBPD (if applicable)", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-24-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-31', childrens: [], status: 'task_done', title: "P.O.F. / Pre-Approval", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-25-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-31', childrens: [], status: 'task_done', title: "Warranty Invoice (not application or waiver)", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-26-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-31', childrens: [], status: 'task_done', title: "Title Alliance ABA", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-27-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-31', childrens: [], status: 'task_done', title: "BAA (with $300 doc storage fee to KW)", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
            ],
            status: 'task_done', title: "ADMIN Share these docs with lender contact (if applicable) [DOCUSIGN]", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-32', boardId: 'board-id-01', columnId: 'column-id-02', cardChildrenOrderIds: [], childrens: [], status: 'task_done', title: "ADMIN Order home warranty (if applicable)", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-33', boardId: 'board-id-01', columnId: 'column-id-02', cardChildrenOrderIds: [], childrens: [], status: 'task_done', title: "ADMIN Complete home warranty data collection form (if applicable)", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-34', boardId: 'board-id-01', columnId: 'column-id-02', cardChildrenOrderIds: ['children-id-28-02', 'children-id-29-02'],
            childrens: [
              { _id: 'children-id-28-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-34', childrens: [], status: 'task_done', title: "Share home warranty doc with title company [DOCUSIGN] ", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
              { _id: 'children-id-29-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-34', childrens: [], status: 'task_done', title: "Share home warranty doc with lender (if not cash deal) [DOCUSIGN]", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
            ],
            status: 'task_done', title: "ADMIN Upload home warranty to DocuSign [DOCUSIGN]", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-35', boardId: 'board-id-01', columnId: 'column-id-02', cardChildrenOrderIds: ['children-id-30-02'],
            childrens: [
              { _id: 'children-id-30-02', boardId: 'board-id-01', columnId: 'column-id-02', cardId: 'card-id-35', childrens: [], status: 'task_done', title: "Share HOA rules with buyer (if applicable) [DOCUSIGN]", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
            ],
            status: 'task_done', title: "ADMIN Upload home warranty to DocuSign [DOCUSIGN]", description: null, cover: null, memberIds: [], comments: [], attachments: [] }

        ]
      },
      {
        _id: 'column-id-03',
        boardId: 'board-id-01',
        title: 'TITLE',
        cardOrderIds: ['card-id-36', 'card-id-37', 'card-id-38', 'card-id-39', 'card-id-40', 'card-id-41', 'card-id-42', 'card-id-43', 'card-id-44'],
        cardLastId: 'card-id-44',
        cards: [
          { _id: 'card-id-36', boardId: 'board-id-01', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'ADMIN Receive title order confirmation and add to DocuSign [DOCUSIGN]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-37', boardId: 'board-id-01', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'ADMIN Receive and review title commitment and add to DocuSign [DOCUSIGN]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-38', boardId: 'board-id-01', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'ADMIN Share title commitment with buyers after review [DOCUSIGN]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-39', boardId: 'board-id-01', columnId: 'column-id-03', childrens: [], status: 'task_waiting', title: 'ADMIN Receive settlement statement (closing date on PA - 3 days) [GCAL]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-40', boardId: 'board-id-01', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'ADMIN Review settlement statement (check if home warranty, $300 doc storage fee included)', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-41', boardId: 'board-id-01', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'ADMIN Confirm with title company that settlement statement is correct, or advise edits needed [GMAIL]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-42', boardId: 'board-id-01', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'ADMIN Share settlement statement with buyers (after 100% correct) [DOCUSIGN]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-43', boardId: 'board-id-01', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'ADMIN If mutual release occurs, then notify title company', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-44', boardId: 'board-id-01', columnId: 'column-id-03', childrens: [], status: 'task_done', title: 'ADMIN If mutual release occurs, then notify lender (if applicable)', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-04',
        boardId: 'board-id-01',
        title: 'INSPECTION',
        cardOrderIds: [
          'card-id-45', 'card-id-46', 'card-id-47', 'card-id-48', 'card-id-49',
          'card-id-50', 'card-id-51', 'card-id-52', 'card-id-53', 'card-id-54',
          'card-id-55', 'card-id-56', 'card-id-57', 'card-id-58', 'card-id-59',
          'card-id-60', 'card-id-61', 'card-id-62'],
          cardLastId: 'card-id-62',
        cards: [
          { _id: 'card-id-45', boardId: 'board-id-01', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'ADMIN Confirm buyer scheduled inspection (w/in 2 days of accepted offer)', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-46', boardId: 'board-id-01', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'ADMIN Inspection Day mm/dd/yyyy at hh:mm am/pm [GOOGLE CAL]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-47', boardId: 'board-id-01', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'ADMIN BIR (buyers inspection response) due mm/dd/yyyy at hh:mm am/pm [GCAL]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-48', boardId: 'board-id-01', columnId: 'column-id-04', childrens: [], status: 'task_waiting', title: 'ADMIN Receive inspection report and add to DocuSign [GMAIL] [DOCUSIGN]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-49', boardId: 'board-id-01', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'CLEIA Discuss inspection report with buyer', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-50', boardId: 'board-id-01', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'CLEIA Draft BIR #1 [DOCUSIGN]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-51', boardId: 'board-id-01', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'CLEIA Share BIR #1 with buyer, request signature [DOCUSIGN]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-52', boardId: 'board-id-01', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'CLEIA Share inspection report and signed BIR #1 with LA (listing agent) [DOCUSIGN]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-53', boardId: 'board-id-01', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'ADMIN Confirm LA received inspection report and signed BIR #1 [DOCUSIGN]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-54', boardId: 'board-id-01', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'ADMIN SIR (sellers inspection response) #1 due mm/dd/yyyy at hh:mm am/pm [GCAL]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-55', boardId: 'board-id-01', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'CLEIA Receive SIR #1 [GMAIL] ', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-56', boardId: 'board-id-01', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'ADMIN Add SIR #1 to DocuSign [DOCUSIGN]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-57', boardId: 'board-id-01', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'CLEIA Review SIR #1 with buyer and respond if needed', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-58', boardId: 'board-id-01', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'CLEIA If SIR #1 not accepted by buyer, write up BIR #2 and repeat until terms in agreement [DOCUSIGN]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-59', boardId: 'board-id-01', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'CLEIA Inspection terms are in agreement', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-60', boardId: 'board-id-01', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'ADMIN If repairs are needed, then add due date to calendar 5 days before closing', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-61', boardId: 'board-id-01', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'ADMIN All repairs due mm/dd/yyyy at hh:mm am/pm [GCAL]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-62', boardId: 'board-id-01', columnId: 'column-id-04', childrens: [], status: 'task_done', title: 'ADMIN Inspector or appraiser to review repairs (if needed) 5 days before closing ', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-05',
        boardId: 'board-id-01',
        title: 'FINANCING',
        cardOrderIds: ['card-id-63', 'card-id-64', 'card-id-65', 'card-id-66', 'card-id-67', 'card-id-68'],
        cardLastId: 'card-id-68',
        cards: [
          { _id: 'card-id-63', boardId: 'board-id-01', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'ADMIN Appraisal Day mm/dd/yyyy at hh:mm am/pm [GOOGLE CAL]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-64', boardId: 'board-id-01', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'ADMIN Confirm value and condition are accepted 10 days before closing', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-65', boardId: 'board-id-01', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'CLEIA Notify buyers if appraisal is good or not (lender does it to, but we just do it to follow up with buyers)', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-66', boardId: 'board-id-01', columnId: 'column-id-05', childrens: [], status: 'task_waiting', title: 'ADMIN Confirm buyer signs CD (closing disclosure) 3 days before closing TRID requirement [GCAL]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-67', boardId: 'board-id-01', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'ADMIN Receive clear to close from lender', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-68', boardId: 'board-id-01', columnId: 'column-id-05', childrens: [], status: 'task_done', title: 'ADMIN Confirm lender sends over final docs to title company', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-06',
        boardId: 'board-id-01',
        title: 'CLOSING',
        cardOrderIds: [
          'card-id-69', 'card-id-70', 'card-id-71', 'card-id-72', 'card-id-73',
          'card-id-74', 'card-id-75', 'card-id-76', 'card-id-77', 'card-id-78',
          'card-id-79', 'card-id-80', 'card-id-81', 'card-id-82', 'card-id-83',
          'card-id-84', 'card-id-85', 'card-id-86', 'card-id-87', 'card-id-88',
          'card-id-89', 'card-id-90', 'card-id-91', 'card-id-92', 'card-id-93',
          'card-id-94', 'card-id-95', 'card-id-96', 'card-id-97', 'card-id-98',
          'card-id-99', 'card-id-100', 'card-id-101'
        ],
        cardLastId: 'card-id-101',
        cards: [
          { _id: 'card-id-69', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'ADMIN Ask buyer if they can close in the afternoon (2 weeks before closing)', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-71', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'ADMIN Ask LA if they can close in the afternoon after buyer is good (2 weeks before closing)', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-72', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'ADMIN Schedule closing with title company [GMAIL]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-73', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_waiting', title: 'ADMIN Receive closing confirmation from title company and add to DocuSign [GMAIL] [DOCUSIGN]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-74', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'ADMIN Share closing confirmation with buyer [DOCUSIGN]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-75', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'ADMIN Email buyers (10 days before close) "{ADDRESS} - Utilities and Closing" (see comment) [GMAIL]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-76', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'ADMIN Confirm with buyers (7 days before closing) that utilities are setup', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-77', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'ADMIN Request repair confirmation (photos, videos, receipts) from LA (if applicable) [GMAIL]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-78', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'ADMIN Receive repair confirmation [GMAIL]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-79', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'ADMIN Upload repair confirmation documentation to DocuSign [DOCUSIGN]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-80', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'ADMIN Share repair confirmation with Buyer [GMAIL] or [DOCUSIGN]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-81', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'CLEIA Call buyers (2 days before closing) ensure utilities are ok, ask when buyers can final walkthrough', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-82', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'ADMIN Schedule final walkthrough on BrokerBay to occur 1-2 hours before closing [GCAL]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-83', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'ADMIN Confirm with buyers date/time of final walkthrough', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-84', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'ADMIN Create closing packet (2 days before closing) [GCAL]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-85', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'CLEIA Attend final walkthrough with buyers mm/dd/yyyy at hh:mm am/pm [GCAL]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-86', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'CLEIA Attend closing mm/dd/yyyy at hh:mm am/pm [GCAL]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-87', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'ADMIN Scan closing docs received from Cleia and add to DocuSign [DOCUSIGN]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-88', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'ADMIN Deposit commission check in KW Chase account using Chase app', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-89', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'ADMIN Add deposit screenshot confirmation to DocuSign [DOCUSIGN]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-90', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'ADMIN Fill out check deposit notification form', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-91', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'ADMIN Create JUST SOLD flyer and post to Facebook', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-92', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'ADMIN Send all docs for compliance and file commission in KW Command', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-93', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'ADMIN Claim and close sale on Zillow', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-94', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'ADMIN Ask Cleia what tags to add to buyers contact info in KW Command', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-95', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'ADMIN Add buyers new address into contact info in KW Command', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-96', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'ADMIN Add buyers home anniversary into contact info in KW Command', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-97', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: "ADMIN Add client's source to Client Source List spreadsheet", description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-98', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'ADMIN Add deal to MFO numbers analyzer', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-99', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'CLEIA Confirm we got paid in Chase account', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-100', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'ADMIN Add CLOSED BLC sheet to DocuSign [DOCUSIGN]', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-101', boardId: 'board-id-01', columnId: 'column-id-06', childrens: [], status: 'task_done', title: 'ADMIN Archive / Hide deal in Real Estate App', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      }
    ]
  }
  ],
  users: [
    {
      _id: 'user-id-01',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: '313-313-3130',
      role: 'admin',
      role_key: 'admin',
      type: 'B1',
      status: 'yes'
    },
    {
      id: 'user-id-02',
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
      phone: '313-313-3130',
      role: 'Buyer 2',
      role_key: 'buyer_2',
      type: 'B2',
      status: 'yes'
    },
    {
      _id: 'user-id-03',
      name: 'Jim Schotts',
      email: "jimschotts@gmail.com",
      phone: "313-313-3133",
      role: "Inspector",
      role_key: "inspector",
      type: "B1",
      status: "no",
    },
    {
      _id: 'user-id-04',
      name: "Grand Lyons",
      email: "grandlyons@gmail.com",
      phone: "313-313-3134",
      role: "Leader",
      role_key: "leader",
      type: "F1",
      status: "no",
    },
    {
      _id: 'user-id-05',
      name: "Team Lyons",
      email: "teamlyons@gmail.com",
      phone: "313-313-3135",
      role: "Leader",
      role_key: "leader_team",
      type: "F2",
      status: "no",
    },
    {
      _id: 'user-id-06',
      name: "Team Lyons",
      email: "teamlyons@gmail.com",
      phone: "313-313-3135",
      role: "Leader",
      role_key: "leader_team",
      type: "F2",
      status: "yes",
    }
  ],
  usersCheck: ['user-id-01', 'user-id-02', 'user-id-03'],
  documents: [
    {
      title: 'KW OFFICE POLICY',
      b1: ['documents-row-data green', ''],
      b2: ['documents-row-data green', ''],
      la: ['documents-row-data', ''],
      f1: ['documents-row-data', ''],
      f2: ['documents-row-data', ''],
      ti: ['documents-row-data', ''],
      kw: ['documents-row-data', ''],
      tg: ['documents-row-data', '']
    },
    {  
      title: 'bba',
      b1: ['documents-row-data green', ''],
      b2: ['documents-row-data green', ''],
      la: ['documents-row-data', 's'],
      f1: ['documents-row-data', 's'],
      f2: ['documents-row-data', 's'],
      ti: ['documents-row-data', ''],
      kw: ['documents-row-data', ''],
      tg: ['documents-row-data', '']
    },
    {
      title: 'pa',
      b1: ['documents-row-data green', ''],
      b2: ['documents-row-data green', ''],
      la: ['documents-row-data', 's'],
      f1: ['documents-row-data', 's'],
      f2: ['documents-row-data', 's'],
      ti: ['documents-row-data', ''],
      kw: ['documents-row-data', ''],
      tg: ['documents-row-data', '']
    },
    {
      title: 'em receipt',
      b1: ['documents-row-data', ''],
      b2: ['documents-row-data', ''],
      la: ['documents-row-data', 's'],
      f1: ['documents-row-data', 's'],
      f2: ['documents-row-data', 's'],
      ti: ['documents-row-data', ''],
      kw: ['documents-row-data', ''],
      tg: ['documents-row-data', '']
    },
    {
      title: 'sd',
      b1: ['documents-row-data green', ''],
      b2: ['documents-row-data green', ''],
      la: ['documents-row-data', ''],
      f1: ['documents-row-data', 's'],
      f2: ['documents-row-data', 's'],
      ti: ['documents-row-data', ''],
      kw: ['documents-row-data', ''],
      tg: ['documents-row-data', '']
    },
    {
      title: 'tax sheet',
      b1: ['documents-row-data green', ''],
      b2: ['documents-row-data green', ''],
      la: ['documents-row-data', ''],
      f1: ['documents-row-data', 's'],
      f2: ['documents-row-data', 's'],
      ti: ['documents-row-data', ''],
      kw: ['documents-row-data', ''],
      tg: ['documents-row-data', '']
    },
    {
      title: 'blc sheet',
      b1: ['documents-row-data green', ''],
      b2: ['documents-row-data green', ''],
      la: ['documents-row-data', ''],
      f1: ['documents-row-data', 's'],
      f2: ['documents-row-data', ''],
      ti: ['documents-row-data', ''],
      kw: ['documents-row-data', ''],
      tg: ['documents-row-data', '']
    },
    {
      title: 'pre-approval',
      b1: ['documents-row-data', ''],
      b2: ['documents-row-data', ''],
      la: ['documents-row-data', ''],
      f1: ['documents-row-data', 's'],
      f2: ['documents-row-data', ''],
      ti: ['documents-row-data', ''],
      kw: ['documents-row-data', ''],
      tg: ['documents-row-data', '']
    },
    {
      title: 'bir',
      b1: ['documents-row-data green', ''],
      b2: ['documents-row-data green', ''],
      la: ['documents-row-data', ''],
      f1: ['documents-row-data', ''],
      f2: ['documents-row-data', ''],
      ti: ['documents-row-data', ''],
      kw: ['documents-row-data', ''],
      tg: ['documents-row-data', '']
    },
    {
      title: 'sir',
      b1: ['documents-row-data yellow', ''],
      b2: ['documents-row-data yellow', ''],
      la: ['documents-row-data', ''],
      f1: ['documents-row-data', 's'],
      f2: ['documents-row-data', ''],
      ti: ['documents-row-data', ''],
      kw: ['documents-row-data', ''],
      tg: ['documents-row-data', '']
    },
    {
      title: 'amend#1',
      b1: ['documents-row-data green', 's'],
      b2: ['documents-row-data green', 's'],
      la: ['documents-row-data', ''],
      f1: ['documents-row-data', ''],
      f2: ['documents-row-data', ''],
      ti: ['documents-row-data', ''],
      kw: ['documents-row-data', ''],
      tg: ['documents-row-data', '']
    },
    {
      title: 'title commit',
      b1: ['documents-row-data', 's'],
      b2: ['documents-row-data', 's'],
      la: ['documents-row-data', ''],
      f1: ['documents-row-data', ''],
      f2: ['documents-row-data', ''],
      ti: ['documents-row-data', ''],
      kw: ['documents-row-data', ''],
      tg: ['documents-row-data', '']
    },
    {
      title: 'altass',
      b1: ['documents-row-data', 's'],
      b2: ['documents-row-data', 's'],
      la: ['documents-row-data', ''],
      f1: ['documents-row-data', ''],
      f2: ['documents-row-data', ''],
      ti: ['documents-row-data', ''],
      kw: ['documents-row-data', ''],
      tg: ['documents-row-data', '']
    },
    {
      title: 'closing confirm',
      b1: ['documents-row-data', ''],
      b2: ['documents-row-data', ''],
      la: ['documents-row-data', ''],
      f1: ['documents-row-data', ''],
      f2: ['documents-row-data', ''],
      ti: ['documents-row-data', ''],
      kw: ['documents-row-data', ''],
      tg: ['documents-row-data', '']
    }]
}