import writeXlsxFile from 'write-excel-file';

export const generateExcel = async ({ schema, fileName = 'template', data = [] }) => {
  return await writeXlsxFile(data, {
    schema,
    fileName: `${fileName}.xlsx`,
    headerStyle: {
      fontWeight: 'light',
      height: 20,
      alignVertical: 'center',
      span: 100,
      backgroundColor: '#E1DFDD',
      color: '#202A44',
    },
  });
};
