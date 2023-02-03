"""empty message

Revision ID: 2a50b6518625
Revises: 4361996acb26
Create Date: 2023-02-03 18:41:55.309397

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2a50b6518625'
down_revision = '4361996acb26'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('carrito', 'sku',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
    op.alter_column('favoritos', 'sku',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('favoritos', 'sku',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
    op.alter_column('carrito', 'sku',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
    # ### end Alembic commands ###
