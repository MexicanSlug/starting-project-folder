import { showError } from "./util/dom"

const htmlDocPath = path.join(process.cwd(), 'index.html')
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString()

const window = new Window();
const document = window.document
vi.stubGlobal('document', document);

beforeEach(() => {
    document.body.innerHTML = ''
    document.write(htmlDocumentContent)
});

it('first test', () => {
    showError('test');

    const errorsEl = document.getElementById('errors')
    const errorParagraph = errorsEl.firstElementChild


    expect(errorParagraph).not.tobeNull();
})  

it('should not contain an error paragraph initially', () => {
    const errorsEl = document.getElementById('errors')
    const errorParagraph = errorsEl.firstElementChild


    expect(errorParagraph).tobeNull();
})

it('should output th eprovided message in the error paragraph', () => {
    const testErrorMessage = 'Test'

    showError(testErrorMessage)

    const errorsEl = document.getElementById('errors')
    const errorParagraph = errorsEl.firstElementChild

    expect(errorParagraph.textContent).toBe(testErrorMessage)
})