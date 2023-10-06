export default {
  name: 'task',
  type: 'document',
  title: 'Task',
  fields: [
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
      placeholder: '-',
      initialValue: new Date(),
    },
    {
      name: 'asset',
      type: 'image',
      title: 'Asset',
    },
    {
      name: 'itens',
      type: 'array',
      of: [{
        name: 'item',
        type: 'object',
        fields: [
          {
            name: 'name',
            type: 'string',
            title: 'Name',
          },
          {
            name: 'url',
            type: 'url',
            title: 'URL',
          },
        ],
      }],
      title: 'Itens',
    },
  ],
}
