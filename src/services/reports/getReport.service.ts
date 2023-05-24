import jsPDF from 'jspdf';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';
import { Customer } from '../../entities/customer.entity';

export const getReportService = async (customerId: number): Promise<[Buffer, string]> => {
  const customerRepos: Repository<Customer> = AppDataSource.getRepository(Customer);
  const contactRepos: Repository<Contact> = AppDataSource.getRepository(Contact);

  const customerFound = await customerRepos.findOneBy({ id: customerId });
  const contactFound = await contactRepos.find({
    where: { customer: { id: customerId } }
  });

  const doc = new jsPDF();

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);

  doc.text('Relatório do Cliente', 10, 10);

  doc.setLineWidth(0.5);
  doc.line(10, 15, 200, 15);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);

  doc.text('Dados do Cliente', 10, 30);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);

  doc.text(`Nome: ${customerFound!.fullName}`, 20, 40);
  doc.text(`Email: ${customerFound!.email}`, 20, 50);
  doc.text(`Telefone: ${customerFound!.phone}`, 20, 60);
  doc.text(`Data de Criação: ${customerFound!.createdAt}`, 20, 70);

  doc.setLineWidth(0.5);
  doc.line(10, 75, 200, 75);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);

  doc.text('Contatos', 10, 90);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);

  let yOffset = 100;
  contactFound.forEach(contact => {
    doc.text(`Nome do Contato: ${contact.fullName}`, 20, yOffset);
    yOffset += 10;
    doc.text(`Email do Contato: ${contact.email}`, 20, yOffset);
    yOffset += 10;
    doc.text(`Telefone do Contato: ${contact.phone}`, 20, yOffset);
    yOffset += 10;
    doc.text(`Data de Criação do Contato: ${contact.createdAt}`, 20, yOffset);
    yOffset += 20;

    if (yOffset > doc.internal.pageSize.height - 20) {
      doc.addPage();
      yOffset = 20;
    }
  });

  return [Buffer.from(doc.output('arraybuffer')), customerFound!.fullName];
};