import { MoreVert } from '@material-ui/icons';
import './article.css';

export default function Article() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className='article'>
      <div className='articleWrapper'>
        <div className='articleTop'>
          <div className='articleTopLeft'>
            <img
              className='articleProfileImg'
              src={PF + 'person/noAvatar.png'}
              alt=''
            />

            <span className='articleUsername'>Publisher</span>
          </div>
          <div className='articleTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='articleCenter'>
          <h1 className='articleTitle'>Post Title</h1>
          <span className='articleText'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            vestibulum molestie ultrices. Ut facilisis sit amet nulla in
            maximus. Nunc varius mi ipsum. Sed et libero tincidunt, congue felis
            tincidunt, tristique nibh. In tincidunt magna non eros pretium
            suscipit. Aenean magna velit, tincidunt eleifend nisl ut, accumsan
            sagittis ante. Donec aliquam cursus justo, ut sollicitudin risus
            consectetur id. Curabitur eget sem et metus sodales semper. Nulla
            faucibus tristique nulla, nec suscipit nulla commodo nec. Etiam enim
            nisi, mollis id diam eu, consectetur laoreet sapien. Etiam nec risus
            velit. Aliquam at mauris vestibulum, feugiat est ac, lacinia tortor.
            Quisque lorem sapien, hendrerit at elit et, iaculis euismod velit.
            Quisque non augue elit. Nunc id elit odio. Maecenas mollis porttitor
            erat et auctor.
            <br />
            <br />
            Vestibulum et condimentum diam. Vestibulum eget cursus ex, ut dictum
            nisl. Aenean in lacus eget mauris tristique mollis at accumsan
            neque. Phasellus magna eros, malesuada et neque id, condimentum
            sagittis tortor. Ut ut ipsum porttitor, efficitur erat id, congue
            est. Morbi nec tellus ac magna placerat lacinia non interdum nibh.
            In sit amet ipsum mollis, vehicula libero nec, fringilla leo. Morbi
            et dapibus dui. Fusce egestas sit amet felis at cursus. Proin
            ultrices rhoncus leo.
            <br />
            <br />
            Suspendisse sit amet justo condimentum erat hendrerit sollicitudin
            sed ac sapien. Quisque eu lacus nunc. Nam sit amet lobortis nulla,
            sit amet semper velit. Praesent nec erat sit amet tellus blandit
            cursus. Proin vel semper sapien. Nulla pharetra dui at facilisis
            dictum. Ut et sem hendrerit, ultrices mi sed, dictum tortor. Proin
            scelerisque diam ac erat imperdiet lacinia. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Vivamus id vulputate velit, in tincidunt odio.
            Suspendisse pulvinar tortor ut tempor dignissim. Etiam condimentum
            ante et mauris tincidunt, eu pretium ipsum accumsan.
            <br />
            <br />
            In feugiat turpis ac felis mollis, sed commodo sem viverra. Cras
            tempus massa a augue accumsan vestibulum. Cras id commodo ex. Donec
            ut varius turpis. Vestibulum vitae felis et massa semper bibendum.
            Nam nec massa ut eros tincidunt venenatis et ut neque. Ut consequat
            sit amet eros at aliquam. Pellentesque cursus dui blandit nisi
            elementum, eget mattis magna tincidunt. Aenean purus elit, lacinia
            quis lorem a, molestie auctor diam. Etiam magna nibh, placerat in
            consectetur eget, commodo eu enim. In et aliquet nisl. Nunc non
            nulla in mauris sagittis sollicitudin. Nam at ante sed eros mollis
            rutrum. Nunc faucibus odio eget sapien malesuada, sed tincidunt leo
            malesuada. Quisque elementum porttitor mauris, sed hendrerit ipsum
            vehicula sit amet.
            <br />
            <br />
            Fusce auctor metus eu laoreet rhoncus. Nullam vulputate imperdiet
            tellus, eu consequat nulla elementum non. Integer eu nisl turpis.
            Nam vel risus vitae dolor elementum euismod. Pellentesque
            sollicitudin libero et ante pharetra vulputate. Sed eros nisi,
            convallis nec ligula id, ultricies blandit ante. Duis bibendum ante
            et est sollicitudin, sit amet scelerisque dui dignissim.
            Pellentesque dictum ipsum diam, at tincidunt sem convallis sit amet.
            Maecenas condimentum lacus nec porttitor rhoncus. Aliquam nec metus
            turpis. Maecenas nisi libero, consequat nec viverra ac, elementum
            vel justo. Donec quis dictum nunc. Suspendisse vel blandit turpis.
            Sed libero arcu, fringilla vitae lacus non, efficitur fringilla
            risus.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            vestibulum molestie ultrices. Ut facilisis sit amet nulla in
            maximus. Nunc varius mi ipsum. Sed et libero tincidunt, congue felis
            tincidunt, tristique nibh. In tincidunt magna non eros pretium
            suscipit. Aenean magna velit, tincidunt eleifend nisl ut, accumsan
            sagittis ante. Donec aliquam cursus justo, ut sollicitudin risus
            consectetur id. Curabitur eget sem et metus sodales semper. Nulla
            faucibus tristique nulla, nec suscipit nulla commodo nec. Etiam enim
            nisi, mollis id diam eu, consectetur laoreet sapien. Etiam nec risus
            velit. Aliquam at mauris vestibulum, feugiat est ac, lacinia tortor.
            Quisque lorem sapien, hendrerit at elit et, iaculis euismod velit.
            Quisque non augue elit. Nunc id elit odio. Maecenas mollis porttitor
            erat et auctor.
            <br />
            <br />
            Vestibulum et condimentum diam. Vestibulum eget cursus ex, ut dictum
            nisl. Aenean in lacus eget mauris tristique mollis at accumsan
            neque. Phasellus magna eros, malesuada et neque id, condimentum
            sagittis tortor. Ut ut ipsum porttitor, efficitur erat id, congue
            est. Morbi nec tellus ac magna placerat lacinia non interdum nibh.
            In sit amet ipsum mollis, vehicula libero nec, fringilla leo. Morbi
            et dapibus dui. Fusce egestas sit amet felis at cursus. Proin
            ultrices rhoncus leo.
            <br />
            <br />
            Suspendisse sit amet justo condimentum erat hendrerit sollicitudin
            sed ac sapien. Quisque eu lacus nunc. Nam sit amet lobortis nulla,
            sit amet semper velit. Praesent nec erat sit amet tellus blandit
            cursus. Proin vel semper sapien. Nulla pharetra dui at facilisis
            dictum. Ut et sem hendrerit, ultrices mi sed, dictum tortor. Proin
            scelerisque diam ac erat imperdiet lacinia. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Vivamus id vulputate velit, in tincidunt odio.
            Suspendisse pulvinar tortor ut tempor dignissim. Etiam condimentum
            ante et mauris tincidunt, eu pretium ipsum accumsan.
            <br />
            <br />
            In feugiat turpis ac felis mollis, sed commodo sem viverra. Cras
            tempus massa a augue accumsan vestibulum. Cras id commodo ex. Donec
            ut varius turpis. Vestibulum vitae felis et massa semper bibendum.
            Nam nec massa ut eros tincidunt venenatis et ut neque. Ut consequat
            sit amet eros at aliquam. Pellentesque cursus dui blandit nisi
            elementum, eget mattis magna tincidunt. Aenean purus elit, lacinia
            quis lorem a, molestie auctor diam. Etiam magna nibh, placerat in
            consectetur eget, commodo eu enim. In et aliquet nisl. Nunc non
            nulla in mauris sagittis sollicitudin. Nam at ante sed eros mollis
            rutrum. Nunc faucibus odio eget sapien malesuada, sed tincidunt leo
            malesuada. Quisque elementum porttitor mauris, sed hendrerit ipsum
            vehicula sit amet.
            <br />
            <br />
            Fusce auctor metus eu laoreet rhoncus. Nullam vulputate imperdiet
            tellus, eu consequat nulla elementum non. Integer eu nisl turpis.
            Nam vel risus vitae dolor elementum euismod. Pellentesque
            sollicitudin libero et ante pharetra vulputate. Sed eros nisi,
            convallis nec ligula id, ultricies blandit ante. Duis bibendum ante
            et est sollicitudin, sit amet scelerisque dui dignissim.
            Pellentesque dictum ipsum diam, at tincidunt sem convallis sit amet.
            Maecenas condimentum lacus nec porttitor rhoncus. Aliquam nec metus
            turpis. Maecenas nisi libero, consequat nec viverra ac, elementum
            vel justo. Donec quis dictum nunc. Suspendisse vel blandit turpis.
            Sed libero arcu, fringilla vitae lacus non, efficitur fringilla
            risus.
          </span>
          <img className='articleImg' src='' alt='' />
          <span className='articleDate'>10/02/2022</span>
        </div>
        <div className='articleBottom'>
          <div className='articleBottomLeft'>
            <img className='likeIcon' src={PF + 'shield.png'} alt='' />
            <span className='articleLikeCounter'>5 people support this</span>
          </div>
          <div className='articleBottomRight'>
            <span className='articleCommentText'>0 Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
