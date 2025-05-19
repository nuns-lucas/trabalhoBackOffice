/**
 * Utilitário simplificado para geração de PDFs a partir de dados de auditoria
 */

/**
 * Gera um PDF simples a partir dos dados de uma auditoria
 * @param {Object} auditoria - Objeto com dados da auditoria
 * @param {Object} dados - Dados adicionais para o PDF
 */
export function gerarPDFAuditoria(auditoria, dados) {
  // Mostrar indicador de carregamento
  const loadingIndicator = document.createElement('div');
  loadingIndicator.className = 'loading-overlay';
  loadingIndicator.innerHTML = '<div class="loading-spinner">Gerando PDF...</div>';
  document.body.appendChild(loadingIndicator);

  try {
    // Carregar atualizações do localStorage ou do objeto da auditoria se não foram fornecidas
    if (!dados.atualizacoes || dados.atualizacoes.length === 0) {
      try {
        // Primeiro verificar se a auditoria tem resultados
        if (auditoria && auditoria.resultados && auditoria.resultados.length > 0) {
          dados.atualizacoes = auditoria.resultados;
        } 
        // Se não, tentar buscar do localStorage
        else {
          const atualizacoesLocalStorage = localStorage.getItem('resultados');
          if (atualizacoesLocalStorage) {
            dados.atualizacoes = JSON.parse(atualizacoesLocalStorage);
          } else {
            dados.atualizacoes = [];
          }
        }
      } catch (error) {
        console.error('Erro ao carregar atualizações:', error);
        dados.atualizacoes = [];
      }
    }
    
    // Verificar se pdfmake está disponível ou carregá-lo
    carregarPDFMake(() => {
      try {
        gerarPDFComPDFMake(auditoria, dados);
        setTimeout(() => {
          if (loadingIndicator && document.body.contains(loadingIndicator)) {
            document.body.removeChild(loadingIndicator);
          }
        }, 2000);
      } catch (error) {
        console.error('Erro ao gerar PDF:', error);
        document.body.removeChild(loadingIndicator);
        alert('Ocorreu um erro ao gerar o PDF. Por favor, tente novamente.');
      }
    }, () => {
      document.body.removeChild(loadingIndicator);
      alert('Não foi possível carregar a biblioteca de PDF. Verifique sua conexão.');
    });
  } catch (error) {
    console.error('Erro geral:', error);
    if (document.body.contains(loadingIndicator)) {
      document.body.removeChild(loadingIndicator);
    }
    alert('Ocorreu um erro inesperado. Por favor, tente novamente.');
  }
}

/**
 * Carrega a biblioteca pdfmake se necessária
 */
function carregarPDFMake(onSuccess, onError) {
  try {
    if (typeof window.pdfMake === 'undefined') {
      console.log('Carregando biblioteca pdfmake...');
      
      // Carregar pdfmake.min.js
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.min.js';
      script.async = true;
      
      script.onload = () => {
        // Carregar fontes VFS
        const fontsScript = document.createElement('script');
        fontsScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/vfs_fonts.js';
        fontsScript.async = true;
        
        fontsScript.onload = () => {
          console.log('Biblioteca pdfmake carregada com sucesso');
          onSuccess();
        };
        
        fontsScript.onerror = () => {
          console.error('Falha ao carregar fontes do pdfmake');
          onError();
        };
        
        document.head.appendChild(fontsScript);
      };
      
      script.onerror = () => {
        console.error('Falha ao carregar biblioteca pdfmake');
        onError();
      };
      
      document.head.appendChild(script);
    } else {
      console.log('Biblioteca pdfmake já está carregada');
      onSuccess();
    }
  } catch (error) {
    console.error('Erro ao carregar biblioteca:', error);
    onError();
  }
}

/**
 * Gera o PDF usando pdfmake (abordagem muito mais simples e confiável)
 */
function gerarPDFComPDFMake(auditoria, dados) {
  try {
    const {
      nomePeritoResponsavel,
      formatarData,
      materiaisUtilizados = [],
      ocorrenciaRelacionada = null,
      temCoordenadas = false,
      obterCoordenadas = 'Não disponível',
      obterEndereco = '',
      atualizacoes = [],
      formatarDataHora = null
    } = dados;

    // Criar documento de definição
    const docDefinition = {
      content: [
        // Cabeçalho
        {
          text: auditoria.titulo || `Auditoria #${auditoria.id}`,
          style: 'header',
          margin: [0, 0, 0, 10]
        },
        {
          text: `Status: ${auditoria.status || 'Não definido'}`,
          style: 'subheader'
        },
        {
          text: `Data: ${formatarData(auditoria.data)}`,
          style: 'subheader',
          margin: [0, 0, 0, 20]
        },

        // Informações Gerais
        {
          text: 'Informações Gerais',
          style: 'sectionHeader'
        },
        {
          style: 'tableExample',
          table: {
            widths: ['30%', '70%'],
            body: [
              ['ID', auditoria.id],
              ['Tipo', auditoria.tipo || 'Não especificado'],
              ['Origem', auditoria.origem || 'Não especificada'],
              ['Status', auditoria.status || 'Não definido'],
              ['Perito Responsável', nomePeritoResponsavel]
            ]
          },
          layout: 'lightHorizontalLines'
        },

        // Descrição
        {
          text: 'Descrição',
          style: 'sectionHeader',
          margin: [0, 15, 0, 8]
        },
        {
          text: auditoria.descricao || 'Sem descrição disponível.',
          margin: [0, 0, 0, 15]
        }
      ],

      // Estilos simples
      styles: {
        header: {
          fontSize: 18,
          bold: true
        },
        subheader: {
          fontSize: 14,
          bold: false,
          italics: true
        },
        sectionHeader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 5]
        },
        tableExample: {
          margin: [0, 5, 0, 15]
        }
      },

      // Metadados do documento
      info: {
        title: `Auditoria ${auditoria.id}`,
        author: 'Sistema de Gestão de Auditorias',
        subject: 'Relatório de Auditoria',
        keywords: 'auditoria, relatório',
      },
      
      // Configurações de página
      pageSize: 'A4',
      pageMargins: [40, 40, 40, 40]
    };

    // Adicionar ocorrência relacionada se existir
    if (ocorrenciaRelacionada) {
      docDefinition.content.push(
        {
          text: 'Ocorrência Relacionada',
          style: 'sectionHeader',
          margin: [0, 15, 0, 8]
        },
        {
          style: 'tableExample',
          table: {
            widths: ['30%', '70%'],
            body: [
              ['ID', ocorrenciaRelacionada.id],
              ['Tipo', ocorrenciaRelacionada.tipo || 'Não especificado'],
              ['Reportado por', ocorrenciaRelacionada.nome || 'Não especificado'],
            ]
          },
          layout: 'lightHorizontalLines'
        }
      );
      
      if (ocorrenciaRelacionada.mensagem) {
        docDefinition.content.push(
          {
            text: 'Mensagem da Ocorrência:',
            margin: [0, 10, 0, 5],
            bold: true
          },
          {
            text: ocorrenciaRelacionada.mensagem,
            margin: [0, 0, 0, 10],
            italics: true
          }
        );
      }
    }

    // Adicionar materiais se existirem
    if (materiaisUtilizados && materiaisUtilizados.length > 0) {
      const materiaisTableBody = [
        ['Material', 'Quantidade', 'Unidade'] // Cabeçalho da tabela
      ];

      // Adicionar linhas de materiais
      materiaisUtilizados.forEach(material => {
        materiaisTableBody.push([
          material.nome, 
          material.quantidade.toString(), 
          material.unidade
        ]);
      });

      docDefinition.content.push(
        {
          text: 'Materiais Utilizados',
          style: 'sectionHeader',
          margin: [0, 15, 0, 8]
        },
        {
          style: 'tableExample',
          table: {
            headerRows: 1,
            widths: ['50%', '25%', '25%'],
            body: materiaisTableBody
          },
          layout: 'lightHorizontalLines'
        }
      );
    }

    // Adicionar localização se disponível
    if (temCoordenadas) {
      docDefinition.content.push(
        {
          text: 'Localização',
          style: 'sectionHeader',
          margin: [0, 15, 0, 8]
        },
        {
          text: `Coordenadas: ${obterCoordenadas}`,
          margin: [0, 5, 0, 0]
        }
      );

      if (obterEndereco) {
        docDefinition.content.push({
          text: `Endereço: ${obterEndereco}`,
          margin: [0, 5, 0, 0]
        });
      }
    }

    // Adicionar atualizações se existirem
    if (atualizacoes && atualizacoes.length > 0) {
      // Adicionar seção de atualizações
      docDefinition.content.push(
        {
          text: 'Atualizações',
          style: 'sectionHeader',
          margin: [0, 15, 0, 8]
        }
      );
      
      // Adicionar cada atualização
      atualizacoes.forEach(atualizacao => {
        const dataFormatada = formatarDataHora ? 
          formatarDataHora(atualizacao.data) : 
          new Date(atualizacao.data).toLocaleString('pt-BR');
          
        docDefinition.content.push(
          {
            table: {
              widths: ['*'],
              body: [
                [
                  {
                    stack: [
                      {
                        columns: [
                          {
                            text: atualizacao.peritoNome,
                            width: '50%',
                            bold: true,
                            fontSize: 11
                          },
                          {
                            text: dataFormatada,
                            width: '50%',
                            alignment: 'right',
                            fontSize: 10,
                            color: '#666'
                          }
                        ],
                        margin: [0, 0, 0, 5]
                      },
                      {
                        text: atualizacao.mensagem,
                        fontSize: 11
                      }
                    ]
                  }
                ]
              ]
            },
            layout: {
              hLineWidth: function(i, node) { return (i === 0 || i === node.table.body.length) ? 1 : 0; },
              vLineWidth: function() { return 0; },
              hLineColor: function() { return '#dddddd'; },
              paddingLeft: function() { return 8; },
              paddingRight: function() { return 8; },
              paddingTop: function() { return 8; },
              paddingBottom: function() { return 8; }
            },
            margin: [0, 0, 0, 10]
          }
        );
      });
    }

    // Adicionar rodapé
    docDefinition.content.push(
      {
        text: `Documento gerado em ${new Date().toLocaleString('pt-BR')}`,
        style: 'footer',
        margin: [0, 30, 0, 0],
        alignment: 'center',
        fontSize: 10,
        color: '#666666'
      },
      {
        text: 'Sistema de Gestão de Auditorias',
        alignment: 'center',
        fontSize: 10,
        color: '#666666'
      }
    );

    // Gerar e baixar o PDF
    window.pdfMake.createPdf(docDefinition).download(`auditoria_${auditoria.id}.pdf`);
    
    console.log('PDF gerado com sucesso!');
  } catch (error) {
    console.error('Erro na geração do PDF com pdfmake:', error);
    throw error;
  }
}

/**
 * Retorna a cor correspondente ao status
 * @param {string} status - Status da auditoria
 * @returns {string} - Código de cor hex
 */
function getStatusColor(status) {
  const statusLower = status?.toLowerCase() || '';
  
  if (statusLower.includes('concluída')) return '#28a745';
  if (statusLower.includes('andamento')) return '#17a2b8';
  if (statusLower.includes('pendente')) return '#ffc107';
  if (statusLower.includes('cancelada')) return '#dc3545';
  
  return '#257401'; // Verde padrão
}